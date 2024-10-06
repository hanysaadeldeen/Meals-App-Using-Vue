import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import Ingredients from "../views/Ingredients.vue";
import IngredientsItem from "../views/IngredientsItem.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter?",
    name: "byLetter",
    component: MealList,
    props: true,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: Ingredients,
  },
  {
    path: "/ingredients/:ingredient",
    name: "ingredientsItem",
    component: IngredientsItem,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
