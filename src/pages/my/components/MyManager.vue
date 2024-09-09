<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { showToast } from 'vant'
import { ref } from 'vue'

defineOptions({
  name: 'MyManager',
})

// interface Props {
//   dialog: boolean
// }
// const props = defineProps<Props>()
// const emits = defineEmits<{
//   (e: 'change', value: boolean)
// }>
// const dialog = ref(props.dialog)
// watch(() => props.dialog, () => dialog.value = props.dialog)
const modelValue = defineModel<boolean>('modelValue', { required: true })
const phone = ref('15697544151')
const wechat = ref('bravesnail98')
const phoneCopy = useClipboard({ source: phone, read: true })
const wechatCopy = useClipboard({ source: wechat, read: true })
// issues
const isPhoneCopy = computed(() => phoneCopy.copied.value)
const isWechatCopy = computed(() => wechatCopy.copied.value)

function onCopy(type: 'phone' | 'wechat') {
  if (type === 'phone')
    phoneCopy.copy()
  else wechatCopy.copy()
  showToast('复制成功')
}
</script>

<template>
  <VanDialog v-model:show="modelValue">
    <div>
      <div class="manager__banner bg-[var(--van-primary-color)]">
        <div class="manager__avatar h-full w-full flex flex-col items-center justify-center gap-8 pa-16">
          <div class="avatar h-60 w-60 rounded-full">
            <img class="h-full w-full rounded-full" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
          </div>
          <div class="text-6xl">
            客户经理
          </div>
        </div>
      </div>

      <div class="manager__contact h-100">
        <div class="h-full w-full flex flex-col justify-around gap-16 pa-16">
          <div class="contact__phone flex justify-between gap-8 text-6xl">
            <div class="phone">
              电话：{{ phone }}
            </div>
            <div class="actions text-[var(--van-primary-color)]" @click="onCopy('phone')">
              {{ isPhoneCopy ? '已复制' : '复制' }}
            </div>
          </div>
          <div class="contact__phone flex justify-between gap-8 text-6xl">
            <div class="phone">
              电话：{{ wechat }}
            </div>
            <div class="actions text-[var(--van-primary-color)]" @click="onCopy('wechat')">
              {{ isWechatCopy ? '已复制' : '复制' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </VanDialog>
</template>
