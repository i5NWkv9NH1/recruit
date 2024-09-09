<!-- eslint-disable no-console -->
<script setup lang="ts">
import { showToast } from 'vant'
import UploadIdCard from './components/UploadIdCard.vue'

definePage({
  name: 'MyAuthReal',
  meta: {
    title: '实名认证',
    level: 3,
  },
})

const text = ref('请如实填写信息，平台承诺保障客户的信息安全')
const state = reactive({
  name: '',
  idcard: '',
  frontImageUrl: '',
  backImageUrl: '',
})
async function onFrontImageUpload(url: string) {
  state.frontImageUrl = url
}
async function onBackImageUpload(url: string) {
  state.backImageUrl = url
}
async function onSubmit() {
  console.log(state)
  if (!state.backImageUrl || !state.frontImageUrl) {
    return
  }
  showToast('保存成功')
}
</script>

<template>
  <div class="h-[calc(100vh-48px-52px)] bg-[var(--van-background-2)]">
    <VanNoticeBar
      :text="text"
      wrapable
    />
    <div class="h-full flex flex-col justify-between pa-16">
      <VanForm class="flex flex-[0.9] flex-col gap-16" @submit="onSubmit">
        <VanField
          v-model="state.name" name="name" label="姓名" maxlength="4" required :rules="[{ required: true, message: '请填写姓名' }, { validator(value) {
            if (!/^[\u4e00-\u9fa5]+$/.test(value)) return '请输入中文'
            if (!/^[\u4e00-\u9fa5]{2,4}$/.test(value)) return '请输入正确的格式'
            return true
          } }]" placeholder="请填写真实姓名"
        />
        <VanField
          v-model="state.idcard" name="idcard" label="身份证号码" maxlength="18" required :rules="[{ required: true, message: '请填写身份证号码' }, { validator(value) {
            if (!/^[1-9]\d{16}(\d|X)$/.test(value)) return '身份证号码格式错误'
            return true
          } }]" placeholder="请填写身份证号码"
        />
        <div class="my-16 mt-16 w-full flex justify-evenly gap-16">
          <UploadIdCard text="上传身份证正面照" @change="onFrontImageUpload" />
          <UploadIdCard text="上传身份证反面照" @change="onBackImageUpload" />
        </div>
        <VanButton native-type="submit" class="mt-auto! w-full! border-none! bg-[var(--van-primary-color)]!">
          保存
        </VanButton>
      </VanForm>
    </div>
  </div>
</template>
