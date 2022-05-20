import { key } from "./../../store/index";
import { TODO_KEY, ID_KEY, FINISH_KEY } from "@/assets/js/constant";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export interface formDataType {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
  isFinish: boolean;
  isTrash: boolean;
}

export default function useCreate( hidden: () => void) {
  const route = useRoute();

  const formData = ref<formDataType>({
    id: 0,
    title: "",
    description: "",
    isFavorite: route.query.status === "3" ? true : false,
    isFinish: false,
    isTrash: false,
  });


  const submitBtnClass = ref("");

  const createRef = ref(null);

  const store = useStore(key);

  const todolist = computed(() => store.state.todolist);
  const finishlist = computed(() => store.state.finishlist);

  watch(
    () => formData?.value?.title,
    (newTitle) => {
      if (newTitle) {
        submitBtnClass.value = "is-active";
      } else {
        submitBtnClass.value = "";
      }
    }
  );

  const clearForm = () => {
    formData.value = {
      id: 0,
      title: "",
      description: "",
      isFavorite: route.query.status === "3" ? true : false,
      isFinish: false,
      isTrash: false,
    };
  };

  const addTodoItem = (item: formDataType) => {
    const clist = todolist.value.slice();
    clist.unshift(item);
    localStorage.setItem(TODO_KEY, JSON.stringify(clist));
    return clist;
  };

  const updateTodoItem = (matter: formDataType) => {
    const newList = todolist.value.slice();
    const index = newList.findIndex((item) => item.id === matter.id);
    newList[index] = matter;
    localStorage.setItem(TODO_KEY, JSON.stringify(newList));
    return newList;
  };

  const updateFinishItem = (matter: formDataType) => {
    const newList = finishlist.value.slice();
    const index = newList.findIndex((item) => item.id === matter.id);
    newList[index] = matter;
    localStorage.setItem(FINISH_KEY, JSON.stringify(newList));
    return newList;
  };

  const setItemId = (item: formDataType) => {
    let id: string | number = localStorage.getItem(ID_KEY) || "0";
    id = Number(JSON.parse(id)) + 1;
    localStorage.setItem(ID_KEY, JSON.stringify(id));
    item.id = id;
  };

  const onSubmit = () => {
    const item = formData.value;

    const canSubmit = item.title !== "";
    if (!canSubmit) return;
    if (!item.id) {
      createMatter(item);
    } else {
      updateMatter(item);
    }
  };

  const createMatter = (item: formDataType) => {
    setItemId(item);
    addTodoItem(item);
    store.dispatch("addTodoItem", item);
    clearForm();
    hidden();
  };

  const updateMatter = (item: formDataType) => {
    const arryName = () => {
      const status = route.query.status;
      const id = item.id;
      if (status === "0") return "todo";
      if (status === "1") return "finish";
      if (todolist.value.findIndex((todo) => todo.id === id) > -1) return "todo"
      if (finishlist.value.findIndex((finish) => finish.id === id) > -1) return "finish";
      return false;
    };

    switch (arryName()) {
      case "todo":
        store.commit("setTodolist", updateTodoItem(item));
        break;
      case "finish":
        store.commit("setFinishlist", updateFinishItem(item));
        break;
      default:
        break;
    }
    clearForm();
    hidden();
  };

  const createData = (item: formDataType) => {
    formData.value = { ...item };
  };

  return {
    formData,
    submitBtnClass,
    onSubmit,
    createRef,
    createData,
  };
}
