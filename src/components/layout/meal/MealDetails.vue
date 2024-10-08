<template>
  <div>
    <div class="md:mx-20 p-8" v-if="!loading">
      <div
        class="intro flex items-center md:flex-row flex-row-reverse justify-between"
      >
        <div class="heading md:mx-10 text-center md:text-start w-full">
          <h1 class="text-1xl sm:text-2xl md:text-4xl font-bold mb-1">
            {{ mealDetails.strMeal }}
          </h1>
          <div class="text-lg py-2">
            <div>
              <span class="font-bold">Category:</span>
              {{ mealDetails.strCategory }}
            </div>
            <div>
              <span class="font-bold">Area:</span>
              {{ mealDetails.strArea }}
            </div>
            <div>
              <span v-if="mealDetails.strTags" class="font-bold">Tags:</span>
              {{ mealDetails.strTags }}
            </div>
          </div>
        </div>
        <div class="rounded-lg flex justify-center md:justify-end">
          <img
            :src="mealDetails.strMealThumb"
            :alt="mealDetails.strMeal"
            class="max-w[100%] rounded-lg md:w-[100%] w-[70%]"
          />
        </div>
      </div>

      <div
        class="my-3 bg-[#ef4444] shadow text-white p-5 rounded md:leading-loose"
      >
        {{ mealDetails.strInstructions }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <!-- <div v-for="(_, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </div> -->
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <!-- <div v-for="(_, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </div> -->
          </ul>
        </div>
        <div class="flex items-center">
          <!-- <a :href="meal.strYoutube" target="_blank">
          <button class="mx-0">Youtube</button>
        </a>
        <a :src="meal.strSource" target="_blank">
          <button class="mx-0">View Original Source</button>
        </a> -->
          <!-- <base-buttons class="mx-0" :href="meal.strYoutube"
          >Youtube</base-buttons
        >
        

        <base-buttons link="link" :src="meal.strSource"
          >View Original Source</base-buttons
        > -->
        </div>
      </div>
    </div>

    <Loading v-if="loading" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import MealsStore from "../../../store/MealsStore";
import { storeToRefs } from "pinia";
import Loading from "../../util/Loading.vue";

const params = defineProps(["id"]);

const store = MealsStore(); // Access the store

const { GetMealsDetails } = MealsStore();
const { loading, mealDetails } = storeToRefs(store);

onMounted(() => {
  if (params.id) {
    GetMealsDetails(params.id);
  }
});
</script>

<style scoped></style>
