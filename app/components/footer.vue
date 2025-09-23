<script setup lang="ts">

</script>

<template>
  <footer class="container">
    <QualityAssured style="margin-block-start: 8px;"/>
    <div class="signature">
      <p class="author_name title">Дмитрий Макаров</p>
      <MyContacts style="justify-content: flex-end"/>
    </div>
  </footer>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  gap: 16px;
}

.author_name {
  text-align: right;
  margin-block-end: 0;
  font-size: 26px;
  line-height: 36px;
}


</style>