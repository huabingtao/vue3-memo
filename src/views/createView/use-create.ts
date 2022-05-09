import { key } from './../../store/index';
import { TODO_KEY } from '@/assets/js/constant';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex'

export interface formDataType {
  title:string,
  description:string,
  isFavorite: boolean,
  isFinish: boolean,
  isTrash: boolean
}

export default function useCreate(hidden:()=> void){
  const formData = ref<formDataType>({
    title: "",
    description: "",
    isFavorite: false,
    isFinish: false,
    isTrash: false
  })

  let submitBtnClass = ref('')

  const createRef = ref(null)

  const store = useStore(key)

  const todolist = computed(() => store.state.todolist)

  watch(()=>formData.value.title,(newTitle)=>{
    if(newTitle){
      submitBtnClass.value = "is-active"
    }else{
      submitBtnClass.value = ""
    }
  })



  const clearForm = () => {
    formData.value = {
      title: "",
      description: "",
      isFavorite: false,
      isFinish: false,
      isTrash: false
    }
  }

  const addTodoItem = (item:formDataType) => {
    const clist = todolist.value.slice()
    clist.push(item)
    localStorage.setItem(TODO_KEY,JSON.stringify(clist))
    return clist
  }

  const onSubmit = () => {
    console.log('onSubmit');
    const item = formData.value
    const canSubmit = item.title !== ""
    if(!canSubmit) return
    addTodoItem(item)
    store.dispatch("addTodoItem",item)
    clearForm()
    hidden()
  }


  return {
    formData,
    submitBtnClass,
    onSubmit,
    createRef
  }
}
