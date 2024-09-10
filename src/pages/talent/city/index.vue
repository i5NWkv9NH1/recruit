<script setup lang="ts">
import { reactive } from 'vue'
import pinyin from 'js-pinyin'
import CityJSON from '@/api/city.json'

definePage({
  name: 'TalentCity',
  meta: {
    title: '城市',
    level: 2,
  },
})

interface City {
  code: string
  name: string
  pinyin: string
  label: string
}
const router = useRouter()
pinyin.setOptions({ checkPolyphone: false, charCase: 0 })
const state = reactive({
  current: {
    code: '010',
    name: '北京',
    pinyin: 'Beijing',
    label: 'Beijing010',
  } as City,
  cities: {} as any,
  indexes: [],
})

function onSelect(city: City) {
  state.current = city
  router.back()
}
</script>

<template>
  <div class="pa-16">
    <div>
      <h2 class="mt-0">
        当前城市：
      </h2>
      <div>{{ state.current.name }}</div>
    </div>
    <h2>切换城市：</h2>
    <VanIndexBar :sticky="false">
      <VanIndexAnchor v-for="(item, index) in CityJSON.city" :key="index" :index="item.initial">
        <h2 class="text-8xl">
          {{ item.initial }}
        </h2>
        <VanGrid gutter="6" column-num="3">
          <VanGridItem
            v-for="(city) in item.list" :key="city.code" clickable :data-json="JSON.stringify(city)"
          >
            <VanButton
              class="w-full border-none!" :class="[
                { 'bg-[var(--van-primary-color)]!': state.current.code === city.code },
              ]" @click="onSelect(city)"
            >
              {{ city.name }}
            </VanButton>
          </VanGridItem>
        </VanGrid>
      </VanIndexAnchor>
    </VanIndexBar>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-index-anchor) {
  padding: 0;
}
:deep(.van-grid-item__content) {
  padding: 0 !important;
}
</style>
