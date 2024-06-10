<template>
  <div class="flex justify-between items-center bg-slate-100 shadow-md px-5">
    <div class="w-[80px]"><img src="/logo.png" alt="logo" /></div>
    <div class="flex gap-4">
      <router-link
        to="/login"
        class="bg-slate-900 font-semibold text-white py-2 px-5 rounded-lg border hover:border-slate-900 hover:bg-white hover:text-black"
      >
        Login
      </router-link>
      <button
        class="bg-slate-900 font-semibold text-white py-2 px-5 rounded-lg border hover:border-slate-900 hover:bg-white hover:text-black"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFunc } from "../composables/useFunction";

const { Login } = useFunc();


</script>
