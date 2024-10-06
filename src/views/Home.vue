<template lang="">
  <main>
    <header>
      <h1>Home Page</h1>
    </header>
    <section>
      <router-link
        v-for="letter in letters.split('')"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        >{{ letter }}</router-link
      >
    </section>
  </main>
</template>
<!-- :to="`/letter/${letter}`"-->
<script setup>
const letters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
</script>

<style scoped>
a {
  margin-right: 10px;
}
</style>
