<template lang="">
  <section>
    <router-link
      v-for="letter in letters.split('')"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      >{{ letter }}</router-link
    >
  </section>
</template>
<script setup>
import { onMounted } from "vue";
import axiosClient from "../AxiosClient";
import MealsStore from "../store/MealsStore";

const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

const { GetAllMeals } = MealsStore();
onMounted(() => {
  GetAllMeals();
});
</script>

<style scoped>
a {
  margin-right: 10px;
}
</style>
