<template lang="">
  <div class="p-8">
    <section class="flex gap-3 justify-center items-center flex-wrap lg:mx-20">
      <router-link
        v-for="letter in letters.split('')"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        class="bg-gray-700 text-white border-green-200 border hover:bg-gray-800 rounded-md p-2 text-center hover:scale-125 ease-in-out transition-all"
        >{{ letter }}</router-link
      >
    </section>
  </div>
</template>
<script setup>
const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
const params = defineProps(["letter"]);
</script>
<style lang=""></style>
