<script setup lang="ts">
import type {Project} from "../types";

const projects: Project[] = [
  {
    title: 'Мультиязычный лендинг с адаптацией контента под регион пользователя',
    description: 'Лендинг для привлечения внимания к международной конференции, цель которой предоставить специалистам удобную среду для эффективного обмена знаниями и опытом, а компаниям — позволит нанять высококвалифицированных разработчиков.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/i18n.gif',
    srcLow: '/imgs/i18n.webp',
    technologies: ['React', 'Formatjs']
  },
  {
    title: 'ERP система для EVENT бизнеса',
    description: 'Организация мероприятий - это супер динамичный процесс, который часто приводит к информационному хаосу в процессе подготовки. Web сервис призван упорядочить хаос и, при этом, не мешать творческому процессу. Реализован удобный интерфейс структурирования задач по блокам и технологии синхронного взаимодействия пользователей.',
    previewFormat: 'desktop',
    srcHigh: '/imgs/erp.gif',
    srcLow: '/imgs/erp.webp',
    technologies: ['Vue', 'Firebase', 'Node']
  },
  {
    title: 'PWA таск менеджер на ios и android',
    description: 'Приложение для ведения задач при подготовке мероприятий. Позволяет удобно хранить данные в одном месте и вести проекты совместно с другими пользователями. Приложение позволяет рабоать в условиях отсутствия связи - приложение сохранит информацию в кеше, а при подключении к интернет, синхронизиует ее с сервером.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/pwa.gif',
    srcLow: '/imgs/pwa.webp',
    technologies: ['PWA', 'Vue', 'Firebase', 'Node']
  },
  {
    title: 'Сайт салона межкомнатных дверей',
    description: 'Лендинг для покупателей межкомнатных дверей - можно посмотреть актуальные коллекции, скачать каталог и написать менеджеру в мессенджер для уточнения деталей.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/shop.gif',
    srcLow: '/imgs/shop.webp',
  },
  {
    title: 'Конфигуратор заказов для фабрики дверей',
    description: 'Система для помощи менеджерам в конфигурации и расчете стоимости заказов. Систематизированные данные и стандартизированные алгоритмы позволяют значительно увеличить скорость обработки заказов и уменьшить количество ошибок.',
    previewFormat: 'desktop',
    srcHigh: '/imgs/doorCalc.webp',
    waitSoon: true,
    technologies: ['Vue', 'Firebase']
  },
]

// Встроенный ИИ помощник помогает лучше подбирать конфигурации под запросы пользователей.

</script>

<template>
  <section>
    <ul class="card_list">
      <li v-for="item of projects">
        <ProjectCard
            :heading="item.title"
            :description="item.description"
            :preview-format="item.previewFormat"
            :src-high="item.srcHigh"
            :src-low="item.srcLow"
            :wait-soon="item.waitSoon"
        >
          <template #technologies>
            <p v-if="item.technologies?.length">Стек: {{ item.technologies?.join(', ') }}</p>
          </template>
        </ProjectCard>
      </li>
    </ul>
  </section>

</template>

<style scoped>

.card_list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 96px;
}

@media only screen and (max-width: 725px) {
  .card_list {
    gap: 64px;
  }
}

</style>