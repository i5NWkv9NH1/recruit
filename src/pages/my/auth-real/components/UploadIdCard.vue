<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
import { type UploaderFileListItem, showToast } from 'vant/es'

defineOptions({
  name: 'UploadIdCard',
})
const props = withDefaults(defineProps<Props>(), {
  text: '',
  maxSize: 1000 * 1024,
})
const emits = defineEmits<{
  (e: 'change', value: string)
}>()
interface Props {
  text: string
  maxSize?: number
}
const images = ref([])
const allowType = ['image/jpeg', 'image/png', 'image/jpg']
async function onBeforeUpload(file: File): Promise<File> {
  return new Promise((resolve, _reject) => {
    if (!allowType.includes(file.type)) {
      showToast('仅支持 .jpg .jpeg .png')
      return Promise.reject
    }
    return resolve(file)
  })
}
async function onAfterUpload(_item: UploaderFileListItem) {
  //* API
  _item.status = 'uploading'
  _item.message = '上传中。。。'
  await promiseTimeout(1000)
  _item.status = 'done'
  emits('change', _item.objectUrl) //* API URL
}
function onOversize(_file: File) {
  showToast('文件大小不能超过 500kb')
}
</script>

<template>
  <div class="upload h-150 w-150 flex flex-col items-center gap-16">
    <div class="upload__thumbnail h-1/4 h-full w-1/4 w-full border-1 border-coolGray border-dashed">
      <div class="h-full w-full pa-8">
        <VanUploader v-model="images" :before-read="onBeforeUpload" :after-read="onAfterUpload" max-count="1" class="h-full w-full" :max-size="props.maxSize" @oversize="onOversize">
          <template #default>
            <div class="h-full w-full bg-[var(--van-primary-color)]!">
              <div class="h-full w-full flex items-center justify-center">
                <div class="i-carbon-add h-40 w-40 bg-[var(--van-text-color)]!" />
              </div>
            </div>
          </template>
          <template #preview-cover="{ file }: { file: UploaderFileListItem}">
            <img :src="file.objectUrl">
          </template>
        </VanUploader>
      </div>
    </div>
    <div class="text-5xl text-[var(--van-text-color)]">
      {{ props.text }}
    </div>
  </div>
</template>

<style lang="css" scoped>
>>> .van-uploader__wrapper {
  width: 100%;
  height: 100%;
}
>>> .van-uploader__input-wrapper {
  flex: 1;
  width: 100%;
  height: 100%;
}
/* preview */
>>> .van-uploader__preview {
  width: 100%;
  height: 100%;
  margin: 0;
}
>>> .van-uploader__preview-image {
  width: 100%;
  height: 100%;
}
</style>
