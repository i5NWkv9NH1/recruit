<script setup lang="ts">
interface Props {
  // task id
  id?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  id: 2,
})
const router = useRouter()
</script>

<template>
  <div class="extend__mini my-8" @click="router.push(`/task/${props.id}`)">
    <div class="mini__headline flex items-center justify-between">
      <h3 class="text-7xl">
        移动端小程序远程开发
      </h3>
      <div class="mini__price text-6xl text-[var(--van-primary-color)]">
        3000
      </div>
    </div>
    <div class="mini__souring flex gap-8 text-6xl text-gray-300">
      <div>北京</div>
      <div>|</div>
      <div>90天</div>
      <div>|</div>
      <div>远程</div>
    </div>
  </div>
</template>
