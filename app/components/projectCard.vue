<script setup lang="ts">
import type {PreviewFormat} from "../types";

const props = defineProps<{
  heading: string,
  description: string,
  previewFormat: PreviewFormat,
  srcHigh: string,
  srcLow?: string,
  waitSoon?: boolean,
  url?: string
}>();

</script>

<template>
  <div class="container">
    <div class="description_container">
      <component
          :is="url ? 'a' : 'div'"
          :class="{link: !!url}"
          :href="url"
          :target="url ? '_blank' : undefined">
        <h2>{{ heading }}</h2>
      </component>
      <p>{{ description }}</p>
      <div style="margin-top: auto">
        <slot name="technologies"></slot>
      </div>
    </div>
    <component
        :is="url ? 'a' : 'div'"
        :class="{link: !!url}"
        :href="url"
        :target="url ? '_blank' : undefined">
      <DesktopPreview v-if="previewFormat === 'desktop'" :src-high="srcHigh" :src-low="srcLow" alt="project demo"
                      :wait-soon="waitSoon"/>
      <MobilePreview v-else-if="previewFormat === 'mobile'" :src-high="srcHigh" :src-low="srcLow" alt="project demo"/>
    </component>
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

.link {
  cursor: pointer;
}

@media only screen and (max-width: 725px) {
  .container {
    flex-wrap: wrap;
  }
}

</style>