<template>
  <header
    class="flex justify-between h-20 items-center px-8 bg-gray-200 border-b border-gray-400"
  >
    <router-link to="/">
      <img src="../../assets/Lime.png" class="h-10" alt="logo" />
    </router-link>
    <div class="flex gap-2">
      <router-link
        :to="{ name: 'byLetter' }"
        class="mx-4 rounded-md hover:bg-[#e1a067] bg-[#e1a067] transition-all ease-in-out border-[#cc6428] border px-6 py-2"
      >
        <button
          :class="{ 'text-[#fffdf5]': pathName.includes('/byletter') }"
          class="font-bold no-underline active:text-[#e1a067]"
        >
          Search by letter
        </button>
      </router-link>
      <router-link
        :to="{ name: 'byName' }"
        class="mx-4 rounded-md hover:bg-[#e1a067] bg-[#e1a067] transition-all ease-in-out border-[#cc6428] border px-6 py-2"
      >
        <button
          :class="{ 'text-[#fffdf5]': pathName.includes('/byName') }"
          class="font-bold no-underline active:text-[#e1a067]"
        >
          search by meal
        </button>
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="mx-4 rounded-md hover:bg-[#e1a067] bg-[#e1a067] transition-all ease-in-out border-[#cc6428] border px-6 py-2"
      >
        <button
          :class="{ 'text-[#fffdf5]': route.path.includes('/byIngredients') }"
          class="font-bold no-underline active:text-[#cc6428]"
        >
          Meals By Ingredients
        </button>
      </router-link>
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
