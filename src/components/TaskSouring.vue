<script setup lang="ts">
interface Props {
  id?: string | number
}
const props = withDefaults(defineProps<Props>(), {
  id: '1',
})
const router = useRouter()
</script>

<template>
  <div class="souring__publisher flex gap-16" @click="router.push(`/company/${props.id}/tasks`)">
    <div class="publisher__avatar h-50 w-50">
      <img class="h-full w-full rounded-full" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
    </div>
    <div class="publisher__info flex flex-1 flex-col justify-evenly gap-4">
      <div class="text-6xl">
        北京XXXXXXX科技有限公司
      </div>
      <div class="flex gap-8 text-5xl text-gray-300">
        <span>秦始皇</span>
        <span>·</span>
        <span>管理者</span>
      </div>
    </div>
  </div>
</template>
