<script setup lang="ts">

</script>

<template>
  <Header/>
  <main>
    <AboutMe id="aboutMe"/>
    <MyProjects id="myProjects"/>
  </main>
  <Footer id="footer"/>
</template>

<style scoped>

#aboutMe {
  padding-block-start: 76px;
  padding-block-end: 58px;
}

#myProjects {
  scroll-margin-block: 32px;
}

@media only screen and (max-width: 725px) {
  #aboutMe {
    padding-block-start: 70px;
  }
}

</style>