<script setup lang="ts">

const isHidden = ref(false);

let lastScroll = 0;
let lastTime = Date.now();

function handleHeaderVisibilityOnScroll() {
  const current = window.scrollY || document.documentElement.scrollTop;
  const now = Date.now();
  const deltaY = current - lastScroll;
  const deltaT = now - lastTime;
  const speed = deltaY / (deltaT || 1); // px/ms

  if (deltaY > 15) {
    isHidden.value = true;
  } else if (deltaY < 0) {
    if (Math.abs(speed) > 1.5) {
      isHidden.value = false;
    }
  }
  lastScroll = current;
  lastTime = now;
}

const activeLink = ref<'aboutMe' | 'myProjects' | 'footer'>('aboutMe');

function activateLinkOnScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop < 300) {
    activeLink.value = 'aboutMe';
    return;
  }

  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= docHeight) {
    activeLink.value = 'footer';
    return;
  }

  activeLink.value = 'myProjects';
}

onMounted(() => {
  window.addEventListener("scroll", handleHeaderVisibilityOnScroll);
  window.addEventListener("scroll", activateLinkOnScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleHeaderVisibilityOnScroll);
  window.removeEventListener("scroll", activateLinkOnScroll);
});

//background: #fff;
//border-bottom: 1px solid #ddd;

</script>

<template>
  <header class="header" :class="{hidden: isHidden}">
    <slot/>
    <nav class="links_container">
      <a class="link" href="#aboutMe" :class="{active: activeLink === 'aboutMe'}">Обо мне</a>
      <a class="link" href="#myProjects" :class="{active: activeLink === 'myProjects'}">Проекты</a>
      <a class="link" href="#footer" :class="{active: activeLink === 'footer'}">Контакты</a>
    </nav>
  </header>
</template>

<style scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s ease;
  z-index: 10;
  background: var(--surface-primary);
  display: flex;
  justify-content: space-between;

}

.header.hidden {
  transform: translateY(-100%);
}

.links_container {
  margin-inline-start: auto;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.link {
  margin-inline-end: 16px;
  padding: 28px 8px;
  transition: opacity .3s ease;
}

.link.active {
  opacity: .6;
}


@media only screen and (max-width: 725px) {
  .link {
    margin-inline-end: 0;
  }
}

@media only screen and (max-width: 400px) {
  .link {
    padding: 22px 8px;
  }

  .links_container {
    margin-inline-end: 8px;
  }
}

</style>