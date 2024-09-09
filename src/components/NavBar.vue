<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const { t } = useI18n()

const title = computed(() => {
  if (!route.meta)
    return ''

  return route.meta.i18n ? t(route.meta.i18n) : (route.meta.title || '')
})
const showNabrBar = computed(() => !route.meta.customNavbar)
const showLeftArrow = computed(() => {
  if (!route.meta)
    return false

  return route.meta.level > 1
})
</script>

<template>
  <VanNavBar
    v-if="showNabrBar"
    :title="title"
    :fixed="true"
    clickable
    placeholder
    :left-arrow="showLeftArrow"
    class="z-20"
    @click-left="onBack"
  />
</template>

<style lang="less">
.van-nav-bar {
  z-index: 2;
}
</style>
