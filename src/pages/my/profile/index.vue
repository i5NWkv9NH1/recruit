<!-- eslint-disable no-console -->
<script setup lang="ts">
import { useCascaderAreaData } from '@vant/area-data'
import { showSuccessToast, showToast } from 'vant'

definePage({
  name: 'MyProfile',
  meta: {
    title: '个人信息',
    level: 2,
  },
})
const defaultAvatarUrl = 'https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp' as const
const state = reactive({
  avatarUrl: '',
  name: 'JannaRin',
  gender: '1',
  birthday: '1998-02-28',
  workDate: '2019-09-01',
  areaCode: '440513',
  areaName: '广东省/汕头市/潮阳区',
})
function onAfterUpload({ objectUrl }) {
  state.avatarUrl = objectUrl
  showSuccessToast('Upload Successfully')
}
function onBeforeUpload(file: File) {
  if (file.type !== 'image/jpeg') {
    showToast('请上传 jpg 格式图片')
    return false
  }
  return true
}

const genders = [
  { text: '男', value: '1' },
  { text: '女', value: '2' },
  { text: '未知', value: '3' },
]
const showGenderPicker = ref(false)
function onGenderConfirm({ selectedOptions }) {
  state.gender = selectedOptions[0]?.value
  showGenderPicker.value = false
}
const showBirthdayPicker = ref(false)
function onBrithdayConfirm({ selectedValues }) {
  state.birthday = selectedValues.join('-')
  showBirthdayPicker.value = false
}
const showWorkDatePicker = ref(false)
function onWorkDateConfirm({ selectedValues }) {
  state.workDate = selectedValues.join('-')
  showWorkDatePicker.value = false
}
const showAreaPicker = ref(false)
const areaOptions = useCascaderAreaData()
function onAreaConfirm({ selectedOptions }) {
  state.areaName = selectedOptions.map(item => item.text).join('/')
  state.areaCode = (selectedOptions[selectedOptions.length - 1].value)
  showAreaPicker.value = false
};

const { refreshing, onRefresh } = useRefresh()
// ? _.avatarUrl will be transform array
// ! use state instead of _
async function onSubmit(_) {
  showSuccessToast('Validation Successfully')
}
</script>

<template>
  <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
    <div class="h-[calc(100vh-64px)] bg-[var(--van-background-2)] pa-16">
      <VanForm @submit="onSubmit">
        <div class="flex flex-col gap-16">
          <div class="field__avatar w-full flex justify-center pa-16">
            <VanUploader :after-read="onAfterUpload" :before-read="onBeforeUpload">
              <img class="h-80 w-80 flex rounded-full" :src="state.avatarUrl || defaultAvatarUrl">
            </VanUploader>
          </div>
          <VanCellGroup>
            <VanField
              v-model="state.name"
              name="name"
              label="姓名"
              placeholder="姓名"
              :rules="[{ required: true, message: '请填写姓名' }]"
            />
            <VanField
              v-model="state.gender"
              is-link
              readonly
              name="gender"
              label="性别"
              placeholder="点击选择性别"
              :rules="[{ required: true, message: '请选择性别' }]"
              @click="showGenderPicker = true"
            />
            <VanPopup v-model:show="showGenderPicker" position="bottom">
              <VanPicker
                :columns="genders"
                @confirm="onGenderConfirm"
                @cancel="showGenderPicker = false"
              />
            </VanPopup>
            <VanField
              v-model="state.birthday"
              is-link
              readonly
              name="birthday"
              label="生日"
              placeholder="点击选择生日"
              :rules="[{ required: true, message: '请选择生日' }]"
              @click="showBirthdayPicker = true"
            />
            <VanPopup v-model:show="showBirthdayPicker" position="bottom">
              <VanDatePicker :min-date="new Date(1)" @confirm="onBrithdayConfirm" @cancel="showBirthdayPicker = false" />
            </VanPopup>
            <VanField
              v-model="state.workDate"
              is-link
              readonly
              name="workDate"
              label="参加工作时间"
              placeholder="点击选择参加工作时间"
              :rules="[{ required: true, message: '请选择参加工作时间' }]"
              @click="showWorkDatePicker = true"
            />
            <VanPopup v-model:show="showWorkDatePicker" position="bottom">
              <VanDatePicker :min-date="new Date(1)" @confirm="onWorkDateConfirm" @cancel="showWorkDatePicker = false" />
            </VanPopup>
            <VanField
              :model-value="state.areaName"
              is-link
              readonly
              name="city"
              label="地区选择"
              placeholder="点击选择省市区"
              :rules="[
                { required: true, message: '请选择地区' }, {
                  validator(_value) {
                    if (!state.areaCode) {
                      return false
                    }
                  },
                }]"
              @click="showAreaPicker = true"
            />
            <VanPopup v-model:show="showAreaPicker" position="bottom">
              <!-- <VanArea
              v-model="state.city"
              :area-list="areaList"
              @confirm="onAreaConfirm"
              @cancel="showAreaPicker = false"
            /> -->
              <VanCascader
                v-model="state.areaCode"
                title="请选择所在地区"
                :options="areaOptions"
                aria-modal
                @close="showAreaPicker = false"
                @finish="onAreaConfirm"
              />
            </VanPopup>
          </VanCellGroup>

          <div class="field__submit">
            <VanButton type="primary" block native-type="submit">
              保存
            </VanButton>
          </div>
        </div>
      </VanForm>
    </div>
  </VanPullRefresh>
</template>
