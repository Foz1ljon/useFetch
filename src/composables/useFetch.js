import axios from "axios";
import { ref, onBeforeMount } from "vue";

export const useFetch = () => {
  const isLoading = ref(true);
  const searchText = ref();
  const products = ref();

  const getAll = axios
    .get("https://dummyjson.com/products", {
      params: { q: searchText.value },
    })
    .then((res) => {
      products.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
onBeforeMount(() => {
    getAll();
})
  

  return {
    getAll,
    isLoading,
    searchText,
    products,
  };
};
