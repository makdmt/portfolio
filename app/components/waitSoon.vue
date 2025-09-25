<script setup lang="ts">

const props = defineProps<{
  activate?: boolean;
}>();

const {theme} = useColorTheme();

</script>

<template>
  <div v-if="activate" class="overlay" :class="{overlay__dark_theme: theme === 'dark'}">
    <p class="text">Скоро<span class="ellipsis"></span></p>
    <slot/>
  </div>
  <slot v-else/>
</template>

<style scoped>
.overlay {
  position: relative;
  display: flex;
  margin: auto;
}

.overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
}

.overlay__dark_theme::after {
  background: rgba(0, 0, 0, 0.45);
}

.text {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 135px;
  height: 52px;
  font-size: 42px;
  z-index: 5;
  color: var(--white);
}

.ellipsis::after {
  content: "...";
  animation: dots 1.5s steps(4, end) infinite;
}

@keyframes dots {
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: "";
  }
}

@media only screen and (max-width: 725px) {
  .text {
    font-size: 32px;
    width: 102px;
    height: 32px;
  }
}

</style>