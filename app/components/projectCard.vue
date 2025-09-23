<script setup lang="ts">
import type {PreviewFormat} from "../types";

const props = defineProps<{
  heading: string,
  description: string,
  previewFormat: PreviewFormat,
  srcHigh: string,
  startHighImgLoad: boolean,
  srcLow?: string,
  waitSoon?: boolean,
  url?: string
}>();

const emit = defineEmits<{
  (event: 'highImgLoaded', value: boolean): void;
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
        <h3>{{ heading }}</h3>
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
      <DesktopPreview
          v-if="previewFormat === 'desktop'"
          :src-high="srcHigh"
          :src-low="srcLow"
          :wait-soon="waitSoon"
          :start-high-img-load="startHighImgLoad"
          :alt="`Демо проекта ${heading}`"
          @highImgLoaded="emit('highImgLoaded', $event)"
      />
      <MobilePreview
          v-else-if="previewFormat === 'mobile'"
          :src-high="srcHigh"
          :src-low="srcLow"
          :start-high-img-load="startHighImgLoad"
          :alt="`Демо проекта ${heading}`"
          @highImgLoaded="emit('highImgLoaded', $event)"
      />
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