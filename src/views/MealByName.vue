<template>
  <div>
    <h1>Meal by name</h1>
    <input type="text" placeholder="Add text" />
  </div>
</template>

<script setup>
const nameProp = defineProps(["name"]);
console.log(nameProp.name);
</script>

<style scoped></style>
