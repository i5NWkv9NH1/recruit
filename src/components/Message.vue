<script setup lang="ts">
interface Props {
  type?: 'system' | 'chat'
  badge?: number
}
const props = withDefaults(defineProps<Props>(), {
  type: 'chat',
  badge: 5,
})
const router = useRouter()
const state = reactive({ ...props })

function onRead() {
  state.badge = 0
}
</script>

<template>
  <VanSwipeCell class="mb-24">
    <div
      class="message flex items-start gap-8 rounded-2xl pt-8" @click="() => {
        if (state.type === 'system') router.push('/message/system')
        else router.push(`/message/chat/1`)
      }"
    >
      <div class="message__avatar h-fit flex-2/10">
        <template v-if="state.badge">
          <VanBadge :content="state.type === 'chat' ? 5 : 0" :offset="[0, 6]" class="badge pos-relative h-full w-full" :dot="props.type === 'system'">
            <template v-if="state.type === 'system'">
              <div class="rounded-full bg-red">
                <div class="i-carbon-location h-60 w-60 text-size-9xl" />
              </div>
            </template>
            <template v-else>
              <img class="h-60 w-60 flex rounded-full" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
            </template>
          </VanBadge>
        </template>
        <template v-else>
          <template v-if="state.type === 'system'">
            <div class="rounded-full bg-red">
              <div class="i-carbon-location h-60 w-60 text-size-9xl" />
            </div>
          </template>
          <template v-else>
            <img class="h-60 w-60 flex rounded-full" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
          </template>
        </template>
      </div>
      <div class="message__info h-60 flex flex-8/10 flex-col gap-8">
        <div class="company line-clamp-1 text-6xl">
          {{ state.type === 'system' ? '系统消息' : '北京XXXXX科技有限公司' }}
        </div>
        <div class="line-clamp-2 text-5xl text-gray-300 font-light line-height-relaxed">
          您好，我们这边在招聘前端您好，我们这边在招聘前端您好，我们这边在招聘前端您好，我们这边在招聘前端您好，我们这边在招聘前端您好，我们这边在招聘前端您好，我们这边在招聘前端您好，我们这边在招聘前端
        </div>
      </div>
      <div class="message__time col-span-12 flex-2/10 text-5xl text-gray-300">
        5分钟前
      </div>
    </div>
    <template #right>
      <div class="h-full flex">
        <div class="h-full w-60 flex flex-col items-center justify-center gap-8 bg-blue-400 text-[var(--van-background-2)]" @click="onRead">
          <div class="i-carbon-list h-25 w-25" />
          <div class="text-5xl">
            已读
          </div>
        </div>
        <div class="h-full w-60 flex flex-col items-center justify-center gap-8 bg-red-400 text-[var(--van-background-2)]">
          <div class="i-carbon-delete h-25 w-25" />
          <div class="text-5xl">
            删除
          </div>
        </div>
      </div>
    </template>
  </VanSwipeCell>
</template>

<style lang="scss" scoped>
// .badge :deep(.van-badge) {
//   font-size: 1rem;
// }
.van-swipe-cell :deep(.van-swipe-cell__right) {
  right: -1px;
}
</style>
