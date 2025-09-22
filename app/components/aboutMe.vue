<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="description_container">
      <h1 class="username">Дмитрий Макаров</h1>
      <h3>Fullstack web developer</h3>
      <p>Разрабатываю web приложения разного уровня сложности: лендинги, pwa для ios и android, crm/erp системы со
        сложной бизнес логикой.</p>
      <a class="link" href="#myProjects">Смотреть проекты</a>
    </div>
    <img
        src="/imgs/avatar.webp"
        alt="avatar"
        class="image"
    />
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

.username {
  max-width: 350px;
  margin-block-end: 0;
}

.link {
  margin-top: auto;
  padding: 0;
}

.image {
  border: 4px solid var(--white);
  border-radius: 16px;
  width: 222px;
  height: 222px;
  box-shadow: 17px 17px 48px #0000001f;
  margin: 8px;
}

@media only screen and (max-width: 725px) {
  .container {
    flex-wrap: wrap;
  }
}
</style>

