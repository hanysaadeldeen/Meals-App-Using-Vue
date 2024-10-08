<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div
        v-for="meal of meals"
        :key="meal.idMeal"
        class="bg-white shadow rounded-xl hover:scale-105 transition-all pb-4"
      >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover"
          />
        </router-link>
        <div class="p-3">
          <h3 class="font-bold">{{ meal.strMeal }}</h3>
          <p class="mb-4 overflow-hidden line-clamp-2">
            {{ meal.strInstructions }}
          </p>
        </div>
        <base-link :link="meal.strYoutube">Youtube</base-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseLink from "../../util/BaseLink.vue";

const props = defineProps(["meals"]);
</script>

<style lang="scss" scoped></style>
