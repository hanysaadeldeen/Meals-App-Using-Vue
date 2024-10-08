<template>
  <div>
    <div v-if="!loading" class="p-8 lg:mx-20">
      <h1 class="text-4xl text-center font-bold mb-4 text-[#cc6428]">
        Ingredients
      </h1>

      <div
        class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-6"
      >
        <router-link
          v-for="ingredient of mealIngredient"
          :to="{
            name: 'ingredientsItem',
            params: { ingredient: ingredient.strIngredient },
          }"
          :key="ingredient.idIngredient"
          class="mx-4 rounded-md hover:bg-[#cc6428] bg-[#e1a067] transition-all ease-in-out border-[#cc6428] border px-6 py-2"
        >
          <h3 class="text-2xl text-center font-bold">
            {{ ingredient.strIngredient }}
          </h3>
        </router-link>
      </div>
    </div>
    <Loading v-if="loading" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import MealsStore from "../store/MealsStore";
import { storeToRefs } from "pinia";
import Loading from "../components/util/Loading.vue";

const store = MealsStore(); // Access the store

const { GetIngredients } = MealsStore();
const { loading, mealIngredient } = storeToRefs(store);

onMounted(() => {
  GetIngredients();
});
</script>

<style scoped></style>
