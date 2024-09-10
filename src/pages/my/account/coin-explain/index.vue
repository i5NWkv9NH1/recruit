<script setup lang="ts">
definePage({
  name: 'MyAccountCoinExplain',
  meta: {
    title: '业务货币说明',
    level: 3,
  },
})
const html = ref(`
  1. 什么是XX币
`)
</script>

<template>
  <div class="bg-[var(--van-background-2)] pa-16 h-[calc(100vh-52px)]!">
    <div v-html="html" />
  </div>
</template>
