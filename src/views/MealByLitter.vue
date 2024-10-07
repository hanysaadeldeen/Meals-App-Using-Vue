<template lang="">
  <div class="p-8">
    <section class="flex gap-3 justify-center items-center flex-wrap lg:mx-20">
      <router-link
        v-for="letter in letters.split('')"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        class="bg-gray-700 text-white border-green-200 border hover:bg-gray-800 rounded-md p-2 text-center hover:scale-125 ease-in-out transition-all"
        >{{ letter }}</router-link
      >
    </section>
    <section v-if="!loading && mealsByLetter.length > 0">
      <MealItem :meals="mealsByLetter" />
    </section>
    <div
      v-else-if="!loading && mealsByLetter.length === 0"
      class="w-full text-center my-4 text-2xl"
    >
      Choose Any Character to Show Meals
    </div>
    <Loading v-if="loading" />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import MealsStore from "../store/MealsStore";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import Loading from "../components/util/Loading.vue";
import MealItem from "../components/layout/meal/Mealtem.vue";

const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const params = defineProps(["letter"]);
const store = MealsStore(); // Access the store

const route = useRoute();
const { SearchMealByLetter } = MealsStore();
const { loading, mealsByLetter } = storeToRefs(store);
watch(route, () => {
  SearchMealByLetter(params.letter);
});

if (params.letter) {
  SearchMealByLetter(params.letter);
}
</script>
<style lang=""></style>
