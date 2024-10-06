<template lang="">
  <div>Meal list {{ letter }}</div>
</template>
<script setup>
const params = defineProps(["letter"]);
console.log(params.letter);
</script>
<style lang=""></style>
