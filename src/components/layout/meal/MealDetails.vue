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
        class="my-3 bg-[#cc6428] shadow text-white p-5 rounded md:leading-loose"
      >
        {{ mealDetails.strInstructions }}
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
