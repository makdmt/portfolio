<script setup lang="ts">

import {useImagePreload} from "../composables/useImagePreload";

const props = defineProps<{
  srcHigh: string;
  srcLow?: string;
  alt: string;
  waitSoon?: boolean;
}>();

const {loaded} = useImagePreload(props.srcHigh);

</script>

<template>
  <WaitSoon :activate="waitSoon">
    <img
        :src="loaded ? srcHigh : srcLow || srcHigh"
        :alt="alt"
        class="image"
    />
  </WaitSoon>
</template>

<style scoped>

.image {
  border: 4px solid var(--white);
  border-radius: 16px;
  width: 488px;
  height: 340px;
  box-shadow: 17px 17px 48px #0000001f;
}

@media only screen and (max-width: 900px) {
  .image {
    border-radius: 8px;
    width: 375px;
    height: 261px;
  }
}

</style>