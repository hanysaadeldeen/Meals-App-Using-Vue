import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import IngredientsItem from "../views/IngredientsItem.vue";
import MealByLitter from "../views/MealByLitter.vue";
import MealByName from "../views/MealByName.vue";
import DefaultRoutes from "../components/layout/DefaultRoutes.vue";
const routes = [
  {
    path: "/",
    component: DefaultRoutes,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/byletter/:letter?",
        name: "byLetter",
        component: MealByLitter,
        props: true,
      },
      {
        path: "/byIngredients",
        name: "ingredients",
        component: () => import("../views/Ingredients.vue"), //this is for lazy loading
      },
      {
        path: "/byingredients/:ingredient",
        name: "ingredientsItem",
        component: IngredientsItem,
        props: true,
      },
      {
        path: "/byName/:name?",
        name: "byName",
        component: MealByName,
        props: true,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: () => import("../components/layout/meal/MealDetails.vue"),
        props: true,
      },
    ],
  },

  {
    path: "/auth",
    name: "auth",
    component: () => import("../components/layout/Guest/GuestAuth.vue"),
    children: [
      {
        path: "/guest",
        name: "GuestAuth",
        component: () =>
          import("../components/layout/Guest/Authentication.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
