<template>
  <div class="w-full fixed z-50 h-screen bg-black/60"></div>
  <div class="fixed z-50">
    <div
      class="fixed flex uppercase flex-col p-4 pt-10 items-center top-[15%] left-[33%] w-[400px] h-2/3 bg-white rounded-lg"
    >
      <p class="text-2xl font-medium text-blue-800">Login</p>
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col py-6 justify-evenly items-center gap-8"
      >
        <input
          class="px-6 py-2 outline-none border rounded-md"
          type="text"
          v-model="userData.username"
          placeholder="Input your username..."
          required
        />
        <div class="relative">
          <input
            class="px-6 py-2 outline-none border rounded-md"
            :type="type"
            v-model="userData.password"
            placeholder="Enter a password..."
            required
          />
          <button @click="show" class="absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="black"
                d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
              />
            </svg>
          </button>
        </div>

        <button
          type="submit"
          class="bg-slate-900 font-semibold text-white py-2 px-5 rounded-lg border hover:border-slate-900 hover:bg-white hover:text-black"
        >
          Sign In
        </button>

        <p v-if="error" class="text-red-500">Error</p>
        <p v-if="isLogin" class="text-green-500">Success</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFunc } from "../composables/useFunction";
import { useAuth } from "../composables/useLogin.js";
import { useRouter } from "vue-router";
const router = useRouter();

const { show, type } = useFunc();
const { userData, login, isLogin, error } = useAuth();

const handleSubmit = async () => {
  await login(userData.value);
  if (isLogin.value) router.push("/products");
};
</script>
