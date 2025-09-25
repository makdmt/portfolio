<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="description_container">
      <div class="username_container">
        <h1 class="username">Дмитрий Макаров<br/>
          <span class="subtitle">Fullstack web developer</span>
        </h1>
        <img
            src="/imgs/avatar.webp"
            alt="avatar"
            class="image image__mobile"
        />
      </div>
      <p>Разрабатываю web приложения разного уровня сложности: лендинги, pwa для ios и android, crm/erp системы с
        разделением ролей и
        сложной бизнес логикой.</p>
      <div class="links_container">
        <a class="link" href="#myProjects">Смотреть проекты</a>
        <MyContacts/>
      </div>
    </div>
    <img
        src="/imgs/avatar.webp"
        alt="avatar"
        class="image image__desktop"
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

.username_container {
  display: flex;
}

.username {
  max-width: 360px;
  margin: 0;
}

.subtitle {
  display: block;
  margin-block-start: 18px;
  font-size: 32px;
  line-height: 46px;
}

.links_container {
  margin-block-start: auto;
  display: flex;
  align-items: center;
}

.link {
  margin-inline-end: 16px;
  padding: 8px 0;
}

.image {
  border: 4px solid var(--border-primary);
  border-radius: 16px;
  box-shadow: 17px 17px 48px #0000001f;
}

.image__desktop {
  width: 222px;
  height: 222px;
}

.image__mobile {
  display: none;
  width: 90px;
  height: 90px;
  margin-block-start: 12px;
  margin-inline-start: -105px;
}

@media only screen and (max-width: 725px) {
  .container {
    flex-wrap: wrap;
  }

  .image__desktop {
    display: none;
  }

  .image__mobile {
    display: block;
  }
}
</style>

