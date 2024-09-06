<script setup lang="ts">
import { definePage } from 'unplugin-vue-router/runtime';
import { useI18n } from 'vue-i18n';
definePage({
  name: 'contract',
  meta: {
    title: '合约',
    i18n: 'menus.contract',
    level: 1,
  },
})
const { t } = useI18n()
</script>

<template>
  <div>
    {{  t('layouts.contract') }}
  </div>
</template>