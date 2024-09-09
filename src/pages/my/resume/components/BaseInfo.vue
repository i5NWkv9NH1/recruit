<script setup lang="ts">
import type { UploaderFileListItem } from 'vant/es'

const router = useRouter()
const defaultAvatarUrl = 'https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp'
const state = reactive({
  editing: false,
  name: '李佳莹',
  avatarUrl: '',
})
const target = ref<HTMLElement>()
onClickOutside(target, (_) => {
  if (state.editing)
    state.editing = false
})
async function onAfterUpload({ objectUrl, ..._args }: UploaderFileListItem) {
  state.avatarUrl = objectUrl
}
</script>

<template>
  <div ref="target" class="resume__basic flex items-center justify-between">
    <div class="basic__left pos-relative flex flex-col gap-12">
      <div class="basic__name text-8xl font-bold">
        {{ state.name }}
      </div>
      <div class="pos-absolute bottom-1/2 right-1/5" @click.stop="router.push('/my/profile')">
        <div class="i-carbon-edit h-20 w-20 bg-[var(--van-button-primary-color)]" />
      </div>
      <!-- <template v-if="!state.editing">
        <div class="basic__name text-8xl font-bold">
          {{ state.name }}
        </div>
        <div class="pos-absolute bottom-1/2 right-1/5" @click.stop="state.editing = true">
          <div class="i-carbon-edit h-20 w-20 bg-[var(--van-button-primary-color)]" />
        </div>
      </template>
      <template v-else>
        <div class="basic__name text-8xl font-bold">
          <VanField v-model="state.name" autofocus class="bg-[var(--van-background)]!" size="large" @click-right-icon="() => state.editing = false">
            <template #right-icon>
              <span>确定</span>
            </template>
          </VanField>
        </div>
      </template> -->
      <div class="flex gap-8 text-6xl text-[var(--van-text-color-2)]">
        <span>8年</span>
        <span>|</span>
        <span>本科</span>
        <span>|</span>
        <span>22岁</span>
      </div>
    </div>
    <div class="basic__right">
      <VanUploader :after-read="onAfterUpload">
        <img class="h-60 w-60 rounded-full" :src="state.avatarUrl || defaultAvatarUrl">
      </VanUploader>
    </div>
  </div>
</template>
