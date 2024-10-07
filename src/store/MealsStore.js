import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosClient from "../AxiosClient";

const MealsStore = defineStore("MealsStore", () => {
  const meals = reactive([]);
  const mealsByName = reactive([]);
  const mealsByLetter = reactive([]);
  const loading = ref(false);

  async function GetAllMeals() {
    loading.value = true;
    try {
      const res = await axiosClient.get("list.php?i=list");
      if (res.status === 200) {
        const AllMeals = res.data.meals.slice(0, 30);
        meals.splice(0, meals.length, ...AllMeals);
      }
    } catch (error) {
      console.error("Error fetching all meals:", error);
    }
    loading.value = false;
  }

  async function SearchMealByName(value) {
    loading.value = true;
    try {
      const res = await axiosClient.get(`search.php?s=${value}`);
      if (res.status === 200) {
        const AllMeals = res.data.meals;
        console.log(AllMeals);

        mealsByName.splice(0, mealsByName.length, ...AllMeals);
      }
    } catch (error) {
      console.error("Error searching meals by name:", error);
    }
    loading.value = false;
  }
  async function SearchMealByLetter(value) {
    loading.value = true;
    try {
      const res = await axiosClient.get(`search.php?f=${value}`);
      if (res.status === 200) {
        const AllMeals = res.data.meals;
        mealsByLetter.splice(0, mealsByLetter.length, ...AllMeals);
      }
    } catch (error) {
      console.error("Error searching meals by name:", error);
    }
    loading.value = false;
  }

  return {
    loading,
    meals,
    GetAllMeals,
    SearchMealByName,
    mealsByName,
    mealsByLetter,
    SearchMealByLetter,
  };
});

export default MealsStore;
