import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosClient from "../AxiosClient";

const MealsStore = defineStore("MealsStore", () => {
  const meals = reactive([]);
  const loading = ref(false);

  async function GetAllMeals() {
    loading.value = true;
    const res = await axiosClient.get("list.php?i=list");
    if (!res.status === 200) {
      console.log("error");
    } else {
      const AllMeals = res.data.meals.slice(0, 30);
      meals.push(...AllMeals);
    }
    loading.value = false;
  }

  return {
    loading,
    meals,
    GetAllMeals,
  };
});

export default MealsStore;
