<script setup lang="ts">
import { BasicInfo } from './components'

definePage({
  name: 'MyResume',
  meta: {
    title: '我的简历',
    level: 2,
  },
})
</script>

<template>
  <div class="h-[calc(100vh-64px)] bg-[var(--van-background-2)] pa-16">
    <BasicInfo />
  </div>
</template>
