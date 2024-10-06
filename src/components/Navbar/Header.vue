<template>
  <header
    class="flex justify-between items-center px-4 py-2 bg-gray-100 border-b border-gray-200"
  >
    <router-link to="/">
      <img src="../../assets/Lime.png" class="h-10" alt="logo" />
    </router-link>
    <div class="flex gap-2">
      <router-link
        class="text-gray-700 font-bold no-underline active:text-blue-500"
        to="/letter"
        >Search by letter</router-link
      >
      <router-link
        class="text-gray-700 font-bold no-underline active:text-blue-500"
        to="/name"
        >search by meal</router-link
      >
      <router-link
        class="text-gray-700 font-bold no-underline active:text-blue-500"
        to="/ingredients"
        >Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
