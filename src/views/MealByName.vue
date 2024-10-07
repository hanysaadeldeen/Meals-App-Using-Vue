<template>
  <section class="p-8 w-full">
    <div class="flex w-full items-center justify-between">
      <input
        class="w-[90%] px-6 py-2 outline-none border border-gray-500 rounded-tl-md rounded-bl-md"
        type="search"
        placeholder="Search by Meals..."
        v-model="title"
      />
      <button
        @click="SearchMealByName(title)"
        class="w-fit rounded-tr-md rounded-br-md hover:bg-gray-800 bg-gray-700 text-white transition-all ease-in-out border-l-gray-700 border-gray-500 border px-6 py-2"
      >
        Search
      </button>
    </div>
  </section>
  <section v-if="!loading && mealsByName.length > 0">
    <div v-for="meal in mealsByName" :key="meal.idMeal">
      {{ meal.strMeal }}
    </div>
  </section>
  <div v-if="loading">
    <h1>loading.......</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MealsStore from "../store/MealsStore";
import { storeToRefs } from "pinia";

const title = ref("");
const nameProp = defineProps(["name"]);
const store = MealsStore(); // Access the store

const { SearchMealByName } = MealsStore();
const { mealsByName, loading } = storeToRefs(store);

onMounted(() => {
  SearchMealByName(title.value);
});
</script>

<style scoped></style>
