<script setup lang="ts">

useHead({
  meta: [
    {name: 'description', content: 'Портфолио проектов и навыки веб-разработки Дмитрия Макарова.'},

    {property: 'og:title', content: 'Дмитрий Макаров — Fullstack web-разработчик'},
    {
      property: 'og:description',
      content: '5+ лет опыта разработки на Vue, React, Node.js, Express и других Js/Ts фреймворках.'
    },
    {property: 'og:image', content: 'https://makdmt.github.io/portfolio/imgs/preview.jpg'},
    {property: 'og:url', content: 'https://makdmt.github.io/portfolio'},
    {property: 'og:type', content: 'website'},
    {property: 'og:site_name', content: 'Дмитрий Макаров. Портфолио'},

    // Twitter Card (опционально)
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: 'Дмитрий Макаров — Fullstack web-разработчик'},
    {
      name: 'twitter:description',
      content: '5+ лет опыта разработки на Vue, React, Node.js, Express и других Js/Ts фреймворках.'
    },
    {name: 'twitter:image', content: 'https://makdmt.github.io/portfolio/imgs/preview.jpg'}
  ],
  link: [
    {rel: 'canonical', href: 'https://makdmt.github.io/portfolio'}
  ]
})

onMounted(() => {
  fetch('https://firebasestorage.googleapis.com/v0/b/dive-event.firebasestorage.app/o/test%2Ffavicon.png?alt=media&token=7a86f141-041c-4f34-b23d-278e4ad84b9d');
})

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