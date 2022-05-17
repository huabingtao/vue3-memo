import { key } from './../../store/index';
import { TODO_KEY,ID_KEY } from '@/assets/js/constant';
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';


export interface formDataType {
  id: number,
  title: string,
  description: string,
  isFavorite: boolean,
  isFinish: boolean,
  isTrash: boolean
}

export default function useCreate(hidden:()=> void){

  const route = useRoute()
  console.log('route:',route);



  const formData = ref<formDataType>({
    id: 0,
    title: "",
    description: "",
    isFavorite: route.query.status === "3" ? true : false,
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
      id: 0,
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

  const setItemId = (item:formDataType) => {
    let id:string | number = localStorage.getItem(ID_KEY) || "0"
    id = Number(JSON.parse(id)) + 1
    localStorage.setItem(ID_KEY,JSON.stringify(id))
    item.id = id
  }


  const onSubmit = () => {
    console.log('onSubmit');
    const item = formData.value
    setItemId(item)
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
