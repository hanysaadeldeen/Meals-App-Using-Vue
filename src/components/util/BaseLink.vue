<template>
  <router-link
    v-if="!link"
    :to="{ name: name }"
    class="mx-4 rounded-md hover:bg-[#cc6428] bg-[#e1a067] transition-all ease-in-out border-[#cc6428] border px-6 py-2"
  >
    <button
      :class="{ 'text-[#fffdf5]': pathName.includes(path) }"
      class="font-bold no-underline active:text-[#e1a067]"
    >
      <slot></slot>
    </button>
  </router-link>
  <a
    v-else
    class="mx-4 rounded-md hover:bg-[#cc6428] bg-[#e1a067] transition-all ease-in-out border-[#cc6428] border px-6 py-2"
    :href="link"
    target="_blank"
    ><slot></slot
  ></a>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  // Define your props here
  name: {
    type: String,
    required: false,
  },
  path: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});

const route = useRoute();

const pathName = computed(() => route.path);
</script>

<style lang="scss" scoped></style>
