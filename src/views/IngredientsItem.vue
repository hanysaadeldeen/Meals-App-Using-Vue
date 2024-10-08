<template lang="">
  <div>
    <section v-if="!loading && mealByIngredient.length > 0">
      <MealItem :meals="mealByIngredient" />
    </section>
    <div
      v-else-if="!loading && mealByIngredient.length === 0"
      class="w-full text-center text-2xl"
    >
      No meals found
    </div>
    <loading v-if="loading" />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import MealsStore from "../store/MealsStore";
import { storeToRefs } from "pinia";
import MealItem from "../components/layout/meal/Mealtem.vue";

const props = defineProps(["ingredient"]);
const store = MealsStore(); // Access the store
const { IngredientsByName } = MealsStore();

const { mealByIngredient, loading } = storeToRefs(store);
onMounted(() => {
  IngredientsByName(props.ingredient);
});
</script>
<style lang=""></style>
