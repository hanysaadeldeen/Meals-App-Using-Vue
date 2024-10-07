<template>
  <header
    class="flex justify-between h-16 items-center px-8 py-3 bg-gray-100 border-b border-gray-200"
  >
    <router-link to="/">
      <img src="../../assets/Lime.png" class="h-10" alt="logo" />
    </router-link>
    <div class="flex gap-2">
      <button class="mx-4 rounded-md hover:bg-gray-700 bg-black px-6 py-2">
        <router-link
          :class="
            pathName.includes('/letter') ? 'text-blue-500' : 'text-gray-100'
          "
          class="font-bold no-underline active:text-blue-500"
          :to="{ name: 'byLetter' }"
          >Search by letter
        </router-link>
      </button>
      <button class="mx-4 rounded-md hover:bg-gray-700 bg-black px-6 py-2">
        <router-link
          :class="
            route.path.includes('/by-name') ? 'text-blue-500' : 'text-gray-100'
          "
          class="font-bold no-underline active:text-blue-500"
          :to="{ name: 'byName' }"
          >search by meal</router-link
        >
      </button>
      <button class="mx-4 rounded-md hover:bg-gray-700 bg-black px-6 py-2">
        <router-link
          :class="
            route.path === '/ingredients' ? 'text-blue-500' : 'text-gray-100'
          "
          class="font-bold no-underline active:text-blue-500"
          :to="{ name: 'ingredients' }"
          >Meals By Ingredients
        </router-link>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const pathName = computed(() => route.path);
</script>

<style scoped></style>
