import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosClient from "../AxiosClient";

const MealsStore = defineStore("MealsStore", () => {
  const meals = reactive([]);
  const mealsByName = reactive([]);
  const mealsByLetter = reactive([]);
  const mealDetails = ref([]);
  const loading = ref(false);

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

  async function GetMealsDetails(id) {
    loading.value = true;
    try {
      const { data } = await axiosClient.get(`lookup.php?i=${id}`);

      mealDetails.value = data.meals[0];
    } catch (error) {
      console.error("Error searching meals by name:", error);
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    meals,
    GetAllMeals,
    SearchMealByName,
    mealsByName,
    mealsByLetter,
    SearchMealByLetter,
    GetMealsDetails,
    mealDetails,
  };
});

export default MealsStore;
