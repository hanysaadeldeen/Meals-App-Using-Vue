import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosClient from "../AxiosClient";

const MealsStore = defineStore("MealsStore", () => {
  const mealsByName = reactive([]);
  const mealsByLetter = reactive([]);
  const loading = ref(false);

  const meals = reactive([]);
  async function GetAllMeals() {
    loading.value = true;
    meals.length = 0;
    try {
      for (let i = 0; i < 10; i++) {
        const { data } = await axiosClient.get(`random.php`);

        meals.push(data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching all meals:", error);
    } finally {
      loading.value = false;
    }
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
