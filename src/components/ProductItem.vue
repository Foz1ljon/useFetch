<template>
  <div
    class="w-[300px] h-[550px] flex flex-col gap-2 px-3 py-2 bg-slate-200 rounded-md shadow-md relative"
  >
    <div class="">
      <img
        class="object-cover w-[280px] h-[280px]"
        :src="product.images[0]"
        alt="img"
      />
      <p class="absolute top-3 rounded-md bg-green-500 py-1.5 px-2 text-white">
        {{ product.category }}
      </p>
    </div>
    <p class="text-lg font-medium">{{ product.title }}</p>
    <p class="text-gray-600">${{ product.price }}</p>
    <p class="text-base">{{ product.description }}</p>
    <div class="absolute bottom-4 right-4">
      <router-link
        class="text-end bg-blue-500 py-1.5 px-2 text-white rounded-md"
        to="/product"
      >
        View Detailts
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  product: Object,
});
</script>
