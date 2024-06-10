import { ref } from "vue";

export const useFunc = () => {
  const type = ref("password");

  const show = () => {
    type.value == "password"
      ? (type.value = "text")
      : (type.value = "password");
  };

  return { type, show };
};
