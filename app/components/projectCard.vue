<script setup lang="ts">
const props = defineProps<{
  heading: string,
  description: string,
  srcHigh: string,
  srcLow?: string
}>();

</script>

<template>
  <div class="container">
    <div class="description_container">
      <h2>{{ heading }}</h2>
      <p>{{ description }}</p>
      <div style="margin-top: auto">
        <slot name="technologies"></slot>
      </div>
    </div>
    <MobilePreview :src-high="srcHigh" :src-low="srcLow" alt="project demo"/>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.description_container {
  display: flex;
  flex-direction: column;
}

</style>