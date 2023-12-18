import { ref } from "vue";

export default function useResource(request = "posts") {
  const infoLista = ref([]);
  const info = ref(null);
  const baseURL = "https://jsonplaceholder.typicode.com/";

  const getTodos = async () => {
    const response = await fetch(baseURL + request);
    infoLista.value = await response.json();
  };

  const getUno = async (id) => {
    const response = await fetch(baseURL + `${request}/` + id);
    info.value = await response.json();
    console.log(info.value);
  };

  return { infoLista, getTodos, info, getUno };
}
