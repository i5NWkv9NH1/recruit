<script setup lang="ts">
import { definePage } from 'unplugin-vue-router/runtime';
definePage({
  name: 'my',
  meta: {
    title: '我的',
    i18n: 'menus.my',
    level: 1,
  },
})
</script>

<template>
  <div>我的</div>
</template>