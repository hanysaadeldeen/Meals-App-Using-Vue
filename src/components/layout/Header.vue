<template>
  <header
    class="flex justify-between h-20 items-center px-8 bg-gray-200 border-b border-gray-400"
  >
    <router-link to="/">
      <img src="../../assets/Lime.png" class="h-10" alt="logo" />
    </router-link>
    <div class="flex gap-2">
      <base-link :name="'byName'" :path="'/byName'"> search by meal</base-link>
      <base-link :name="'byLetter'" :path="'/byletter'">
        Search by letter</base-link
      >
      <base-link :name="'ingredients'" :path="'/byIngredients'">
        Meals By Ingredients</base-link
      >
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseLink from "../util/BaseLink.vue";

const route = useRoute();

const pathName = computed(() => route.path);
</script>

<style scoped></style>
