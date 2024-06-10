<template>
  <div class="p-4 px-16">
    <div class="grid grid-cols-4 gap-6">
      <ProductItem v-for="(item, i) in products" :key="i" :product="item" />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "../composables/useFetch";
import ProductItem from "../components/ProductItem.vue";
import { onBeforeMount } from "vue";
const { getAll, products } = useFetch();

onBeforeMount(() => {
  getAll();
});
</script>
