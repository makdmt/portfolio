<script setup lang="ts">

</script>

<template>
  <div class="contacts_block">
    <a href="https://t.me/Makemt" target="_blank" class="link">telegram</a>
    <a href="https://github.com/makdmt" target="_blank" class="link">github</a>
  </div>
</template>

<style scoped>
.contacts_block {
  display: flex;
  gap: 16px;
}

.link {
  padding: 8px;
}

@media only screen and (max-width: 725px) {
  .contacts_block {
    gap: 6px;
  }
}

</style>