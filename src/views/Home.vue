<template>
  <div>
    <section v-if="!loading && meals.length > 0">
      <MealItem :meals="meals" />
    </section>
    <div
      v-else-if="!loading && meals.length === 0"
      class="w-full text-center text-2xl"
    >
      No meals found
    </div>
    <Loading v-if="loading" />
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import MealsStore from "../store/MealsStore";
import Loading from "../components/util/Loading.vue";
import MealItem from "../components/layout/meal/Mealtem.vue";

const store = MealsStore();
const { GetAllMeals } = MealsStore();
const { meals, loading } = storeToRefs(store);
onMounted(() => {
  GetAllMeals();
});
</script>

<style scoped>
a {
  margin-right: 10px;
}
</style>
