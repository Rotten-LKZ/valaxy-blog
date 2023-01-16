<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Sponser } from './data/sponsers'

const { t } = useI18n()

defineProps<{
  sponsers: Sponser[]
}>()
</script>

<template>
  <table class="rot-sponsers">
    <thead>
      <tr>
        <th>{{ t('bill.serial_number') }}</th>
        <th>{{ t('bill.sponse.sponsers') }}</th>
        <th>{{ t('bill.sponse.sum') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(sponser, index) in sponsers" :key="index">
        <th>{{ index + 1 }}</th>
        <th>
          <img :src="sponser.avatar || ''" :alt="`${sponser.name}'s avatar'`" class="rot-sponsers-img" :onerror="`this.src='https://img.rotcool.me/i/2023/01/16/63c4b24cef832.png'`">
          <a target="_blank" :href="sponser.url || ''">{{ sponser.name }}</a>
        </th>
        <th>{{ sponser.sponses.reduce((sum, { sum: s }) => sum + s, 0) }}</th>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.rot-sponsers {
  .rot-sponsers-img {
    display: inline;
    height: 30px;
    margin: 0 6px;
    margin-left: 0;
    border-radius: 6px;
    transform: translateY(-2px);
  
    &::before {
      content: '';
      display: none;
    }
  }
}
</style>
