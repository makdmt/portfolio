<script setup lang="ts">

</script>

<template>
  <footer class="container">
    <QualityAssured/>
    <div class="signature">
      <h3 class="author_name">Дмитрий Макаров</h3>
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
  margin-block-end: 6px;
}



</style>