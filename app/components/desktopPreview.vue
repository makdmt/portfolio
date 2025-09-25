<script setup lang="ts">

const props = defineProps<{
  srcHigh: string;
  startHighImgLoad: boolean;
  srcLow?: string;
  alt: string;
  waitSoon?: boolean;
}>();

const loaded = ref<boolean>(false);

watch(() => props.startHighImgLoad, (start) => {
  if (!start) return;
  try {
    const img = new Image();
    img.src = props.srcHigh;
    img.onload = () => {
      loaded.value = true;
      emitter(true);
    };
    img.onerror = () => {
      emitter(false);
    }
  } catch (err) {
    console.error(err)
  }

}, {immediate: true});

const emit = defineEmits<{
  (event: 'highImgLoaded', value: boolean): void;
}>();

function emitter(success: boolean) {
  emit('highImgLoaded', success);
}

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
  border: 4px solid var(--border-primary);
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

@media only screen and (max-width: 465px) {
  .image {
    width: 80vw;
    height: 55.7vw;
  }
}

</style>