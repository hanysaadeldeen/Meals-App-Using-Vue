import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import IngredientsItem from "../views/IngredientsItem.vue";
import MealByLitter from "../views/MealByLitter.vue";
import MealByName from "../views/MealByName.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter?",
    name: "byLetter",
    component: MealByLitter,
    props: true,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: () => import("../views/Ingredients.vue"), //this is for lazy loading
  },
  {
    path: "/ingredients/:ingredient",
    name: "ingredientsItem",
    component: IngredientsItem,
    props: true,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealByName,
    props: true,
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: () => import("../views/MealDetails.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
