import axios from "axios";
import { ref, onBeforeMount } from "vue";

export const useFetch = () => {
  const isLoading = ref(true);
  const searchText = ref();
  const products = ref();

  const getAll = () => {
    axios
      .get("https://dummyjson.com/products", {
        params: { q: searchText.value, limit: 8 },
      })
      .then((res) => {
        products.value = res.data.products;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoading.value = false;
      });
  };


  return {
    getAll,
    isLoading,
    searchText,
    products,
  };
};
