<script setup lang="ts">
const { t } = useI18n()
const active = ref(0)
const route = useRoute()

const show = computed(() => {
  if (route.meta.level && route.meta.level <= 1)
    return true
  return false
})
</script>

<template>
  <van-tabbar v-if="show" v-model="active" route placeholder>
    <Role>
      <template #user>
        <van-tabbar-item replace to="/task">
          {{ t('layouts.task') }}
          <template #icon>
            <div class="i-carbon:task" />
          </template>
        </van-tabbar-item>
      </template>
      <template #enterprise>
        <van-tabbar-item replace to="/talent">
          人才
          <template #icon>
            <div class="i-carbon:task" />
          </template>
        </van-tabbar-item>
      </template>
    </Role>
    <van-tabbar-item replace to="/contract">
      {{ t('layouts.contract') }}
      <template #icon>
        <div class="i-carbon:doc" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/message">
      {{ t('layouts.message') }}
      <template #icon>
        <div class="i-carbon:chat" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/my">
      {{ t('layouts.my') }}
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
