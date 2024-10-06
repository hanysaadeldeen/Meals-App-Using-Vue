import { defineStore } from "pinia";
import { ref } from "vue";

const MealsStore = defineStore("MealsStore", () => {
  const meals = ref("mels");

  return {
    meals,
  };
});

export default MealsStore;
