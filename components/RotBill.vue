<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import sponsers from './data/sponsers'
import expense from './data/expense'
import IconIncome from './icons/IconIncome.vue'
import IconSurplus from './icons/IconSurplus.vue'
import IconExpenditure from './icons/IconExpenditure.vue'

const choose = ref('SPONSE' as 'SPONSE' | 'EXPENSE')

const { t } = useI18n()

function calcSponseSum() {
  let res = 0
  for (const s of sponsers) {
    res += s.sponses.reduce((sum, { sum: s }) => sum + s, 0)
  }
  return res
}

function calcExpenseSum() {
  return expense.reduce((sum, { sum: s }) => sum + s, 0)
}
</script>

<template>
  <div class="rot-bill">
    <div class="rot-bill-summary">
      <span class="rot-bill-summary-income"><IconIncome />{{ t('bill.income') }}：{{ calcSponseSum().toFixed(2) }}</span> 
      -
      <span class="rot-bill-summary-expenditure"><IconExpenditure />{{ t('bill.expenditure') }}：{{ calcExpenseSum().toFixed(2) }}</span>
      =
      <span class="rot-bill-summary-surplus"><IconSurplus />
        {{ t('bill.surplus') }}：{{ (calcSponseSum() - calcExpenseSum()).toFixed(2) }}
      </span>
    </div>

    <div class="rot-bill-btns">
      <button
        class="rot-bill-btns-left" :class="choose === 'SPONSE' ? 'rot-bill-btns-selected' : ''"
        @click="choose = 'SPONSE'"
      >
        {{ t('bill.sponse.sponsers_list') }}
      </button>
      <button
        class="rot-bill-btns-right" :class="choose === 'EXPENSE' ? 'rot-bill-btns-selected' : ''"
        @click="choose = 'EXPENSE'"
      >
        {{ t('bill.expense.expense_list') }}
      </button>
    </div>
    <RotSponsers :sponsers="sponsers" v-if="choose === 'SPONSE'" />
    <RotExpense :expense-items="expense" v-if="choose === 'EXPENSE'" />
    <YunSponsor style="margin-top: 50px" />
  </div>
</template>

<style lang="scss">
.rot-bill {
  .rot-bill-summary {
    text-align: center;
    margin-top: 4px;
    margin-bottom: 12px;

    span {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
    }

    svg {
      display: inline;
      width: 18px;
      transform: translateY(-2px);
      margin-right: 4px;
    }

    .rot-bill-summary-income {
      background-color: hsla(80, 50%, 80%, 0.8);
      --rot-summary-income: hsla(118, 50%, 22%, 0.9);
      // background-color: hsla(110, 93%, 83%, 1);
      color: var(--rot-summary-income);
      fill: var(--rot-summary-income);
    }

    .rot-bill-summary-expenditure {
      // background-color: hsla(0, 100%, 95%, 1);
      background-color: hsla(0, 73%, 93%, 0.8);
      --rot-summary-expenditure: hsla(0, 50%, 50%, 0.9);
      color: var(--rot-summary-expenditure);
      fill: var(--rot-summary-expenditure);
    }

    .rot-bill-summary-surplus {
      // background-color: hsla(61, 100%, 77%, 1);
      background-color: hsla(60, 85%, 87%, 0.8);
      --rot-summary-surplus: hsla(0, 0%, 29%, 0.9);
      color: var(--rot-summary-surplus);
      fill: var(--rot-summary-surplus);
    }
  }

  .rot-bill-btns {
    text-align: center;
    font-size: 0.92rem;

    button {
      padding: 4px 8px;
      border: 1px solid rgba($color: #acacac, $alpha: 0.7);
      border-bottom: 0;
    }

    .rot-bill-btns-selected {
      background-color: rgba($color: #acacac, $alpha: 0.5);
    }

    .rot-bill-btns-left {
      border-top-left-radius: 4px;
      border-right: 0;
    }
    
    .rot-bill-btns-right {
      border-top-right-radius: 4px;
    }
  }
}
</style>
