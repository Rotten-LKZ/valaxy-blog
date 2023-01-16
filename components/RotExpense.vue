<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Expense } from './data/expense'

const { t } = useI18n()

defineProps<{
  expenseItems: Expense[]
}>()

function parseTimeWithZero(time: number | string) {
  if (typeof time === 'string') {
    return time
  }
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${addZero(month)}-${addZero(day)} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function addZero(num: number) {
  return num < 10 ? `0${num}` : num
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>{{ t('bill.serial_number') }}</th>
        <th>{{ t('bill.expense.time') }}</th>
        <th>{{ t('bill.expense.item') }}</th>
        <th>{{ t('bill.expense.sum') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in expenseItems" :key="index">
        <th>{{ index + 1 }}</th>
        <th>{{ parseTimeWithZero(item.time) }}</th>
        <th>{{ item.desc }}</th>
        <th>{{ item.sum }}</th>
      </tr>
    </tbody>
  </table>
</template>
