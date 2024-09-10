<script setup lang="ts">
definePage({
  name: 'MyAccountDepositExplain',
  meta: {
    title: '签约押金说明',
    level: 3,
  },
})
const html = ref(`
  为保障。。。。。
`)
</script>

<template>
  <div class="bg-[var(--van-background-2)] pa-16 h-[calc(100vh-52px)]!">
    <div v-html="html" />
  </div>
</template>
