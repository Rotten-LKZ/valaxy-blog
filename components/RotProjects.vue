<script setup lang="ts">
import projects from './data/projects'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  lang: 'en' | 'zh'
}>()
</script>

<template>
  <div class="rot-projects">
    <div class="rot-projects-summary">{{ t('projects.total', projects.length) }}</div>
    <div class="rot-projects-item" v-for="(proj, index) in projects" :key="index">
      <h3>{{ lang === 'en' ? proj.eng_name || proj.name : proj.name || proj.eng_name }}</h3>
      <p>{{ t('projects.desc') }}：{{ lang === 'en' ? proj.eng_desc || proj.desc : proj.desc || proj.eng_desc }}</p>
      <p v-if="proj.github_url">
        GitHub：<a :href="proj.github_url" target="_blank">{{ proj.github_url }}</a>
      </p>
      <p v-if="proj.example_url">
        {{ t('projects.example_site') }}：
        <a :href="proj.example_url" target="_blank">{{ proj.example_url }}</a>
      </p>
      <p v-if="proj.intro_url">
        {{ t('projects.intro_site') }}：
        <a :href="proj.intro_url" target="_blank">{{ proj.intro_url }}</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.rot-projects {
  .rot-projects-summary {
    text-align: center;
    font-size: 0.92rem;
  }

  .rot-projects-item {
    margin-top: 20px;
    border: 1px solid rgba($color: #acacac, $alpha: 0.7);
    border-radius: 10px;
    padding: 10px;

    h3 {
      margin-top: 0;
      margin-bottom: 8px;
    }

    p {
      margin: 4px 0;
    }
  }
}
</style>
