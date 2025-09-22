<script setup lang="ts">

import {useImagePreload} from "../composables/useImagePreload";

const props = defineProps<{
  srcHigh: string;
  srcLow?: string;
  alt: string;
}>();

const {loaded} = useImagePreload(props.srcHigh);

</script>

<template>
  <img
      :src="loaded ? srcHigh : srcLow || srcHigh"
      :alt="alt"
      class="image"
  />
</template>

<style scoped>

.image {
  border: 4px solid var(--white);
  border-radius: 32px;
  width: 222px;
  height: 493px;
  box-shadow: 17px 17px 48px #0000001f;
}

@media only screen and (max-width: 725px) {
  .image {
    border-radius: 24px;
    width: 160px;
    height: 330px;
  }
}

</style>