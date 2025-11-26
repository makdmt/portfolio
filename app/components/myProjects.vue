<script setup lang="ts">
import type {Project} from "../types";

const projects: Project[] = [
  {
    title: 'Мультиязычный лендинг с адаптацией контента под регион пользователя',
    description: 'Лендинг для привлечения внимания к международной конференции, цель которой предоставить специалистам удобную среду для эффективного обмена знаниями и опытом, а компаниям — позволит нанять высококвалифицированных разработчиков.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/i18n.gif',
    srcLow: '/imgs/i18n.webp',
    technologies: ['React', 'Formatjs'],
    url: 'https://makdmt.github.io/i18n2025/'
  },
  {
    title: 'RSVP-система для приглашения гостей на мероприятия',
    description: 'Система позволяет вести список участников через персонализированные ссылки: гости могут принять или отклонить приглашение, выбрать подходящую дату, оставить комментарий. После подтверждения участия ссылка остаётся активной, но теперь ведёт на страницу с деталями мероприятия и личным QR-кодом гостя. На площадке организаторы сканируют QR-код, и статус в списке автоматически меняется на «Пришёл» — все изменения фиксируются в истории.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/rsvp.gif',
    srcLow: '/imgs/rsvp.webp',
    technologies: ['Nuxt', 'MongoDb', 'Antdv'],
  },
  {
    title: 'ERP система для EVENT бизнеса',
    description: 'Организация мероприятий - это супер динамичный процесс, который часто приводит к информационному хаосу в процессе подготовки. Web сервис призван упорядочить хаос и, при этом, не мешать творческому процессу. Реализован удобный интерфейс структурирования задач по блокам и технологии синхронного взаимодействия пользователей.',
    previewFormat: 'desktop',
    srcHigh: '/imgs/erp.gif',
    srcLow: '/imgs/erp.webp',
    technologies: ['Vue', 'Firebase', 'Node'],
    url: 'https://dive-event.web.app/about/'
  },
  {
    title: 'PWA таск менеджер на ios и android',
    description: 'Приложение для ведения задач при подготовке мероприятий. Позволяет удобно хранить данные в одном месте и вести проекты совместно с другими пользователями. Приложение позволяет рабоать в условиях отсутствия связи - приложение сохранит информацию в кеше, а при подключении к интернет, синхронизирует ее с сервером.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/pwa.gif',
    srcLow: '/imgs/pwa.webp',
    technologies: ['PWA', 'Vue', 'Firebase', 'Node'],
    url: 'https://dive-event.web.app/'
  },
  {
    title: 'Сайт салона межкомнатных дверей',
    description: 'Лендинг для покупателей межкомнатных дверей - можно посмотреть актуальные коллекции, скачать каталог и написать менеджеру в мессенджер для уточнения деталей.',
    previewFormat: 'mobile',
    srcHigh: '/imgs/shop.gif',
    srcLow: '/imgs/shop.webp',
    url: 'https://design-doors-ola.ru/'
  },
  {
    title: 'Конфигуратор заказов для фабрики дверей',
    description: 'Система для помощи менеджерам в конфигурации и расчете стоимости заказов. Систематизированные данные и стандартизированные алгоритмы позволяют значительно увеличить скорость обработки заказов и уменьшить количество ошибок.',
    previewFormat: 'desktop',
    srcHigh: '/imgs/doorCalc.webp',
    waitSoon: true,
    technologies: ['Vue', 'Firebase'],
  },
]
const baseUrl = useRuntimeConfig().app.baseURL.slice(0, -1);

projects.forEach(project => {
  project.srcHigh = baseUrl + project.srcHigh;
  if (project.srcLow) project.srcLow = baseUrl + project.srcLow;
});

const waitForHighImgLoad = ref<number>(0);

// Встроенный ИИ помощник помогает лучше подбирать конфигурации под запросы пользователей.

</script>

<template>
  <section>
    <h2 class="visually-hidden">Проекты</h2>
    <ul class="card_list">
      <li v-for="(item, index) in projects">
        <ProjectCard
            :heading="item.title"
            :description="item.description"
            :preview-format="item.previewFormat"
            :src-high="item.srcHigh"
            :src-low="item.srcLow"
            :url="item.url"
            :wait-soon="item.waitSoon"
            :start-high-img-load="waitForHighImgLoad === index"
            @highImgLoaded="waitForHighImgLoad++"
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