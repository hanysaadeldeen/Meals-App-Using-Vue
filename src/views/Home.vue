<template lang=""></template>
<script setup>
import { onMounted } from "vue";
import MealsStore from "../store/MealsStore";

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
