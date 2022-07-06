<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface SponseItem {
  time: number
  way: string
  sum: number
  desc?: string
}

interface Sponser {
  name: string
  url?: string
  avatar?: string
  sponses: SponseItem[]
}

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
          <img :src="sponser.avatar || ''" :alt="`${sponser.name}'s avatar'`" class="rot-sponsers-img" :onerror="`this.src='https://cdn.rotcool.me/2022/07/06/none.jpg'`">
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
