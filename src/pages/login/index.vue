<script setup lang="ts">
definePage({
  name: 'Login',
  meta: {
    level: 2,
    title: '登录',
    i18n: 'menus.login',
  },
})

const form = reactive({
  username: {
    value: '',
    rules: [],
  },
  captcha: {
    value: '',
    rules: [],
  },
  read: {
    value: false,
    rules: [],
  },
})

async function onSubmit() {
}
</script>

<template>
  <div class="pa-16">
    <h1>验证码登录</h1>
    <VanForm class="mt-32 flex flex-col gap-24" @submit="onSubmit">
      <VanField v-model="form.username.value" left-icon="location-o" placeholder="请输入手机号" type="number" maxlength="11" class="bg-transparent!" />
      <VanField v-model="form.captcha.value" left-icon="location-o" type="number" maxlength="4" class="flex items-center bg-transparent!" placeholder="请输入验证码">
        <template #button>
          <VanButton type="default" size="small">
            获取验证码
          </VanButton>
        </template>
      </VanField>
      <!-- <div class="input__field h-40 flex items-center gap-4 border-4 border-amber-4">
        <VanIcon name="location-o" />
        <input v-model="form.username.value" class="w-full border-0 bg-transparent" placeholder="请输入手机号" tabindex="1">
      </div>
      <div class="input__field h-40 flex items-center gap-4 border-4">
        <VanIcon name="location-o" />
        <input v-model="form.captcha.value" class="flex-3/4 border-0 bg-transparent" placeholder="请输入验证码" tabindex="2">
        <span class="flex-1/4" tabindex="3">获取验证码</span>
      </div> -->

      <VanButton native-type="submit" type="primary">
        登录
      </VanButton>

      <div class="w-full flex items-center gap-6">
        <VanCheckbox v-model="form.read" />
        <div class="flex text-5xl">
          我已阅读
          <RouterLink to="/">
            《IT企业平台服务协议》
          </RouterLink>
          和
          <RouterLink to="/">
            《隐私政策》
          </RouterLink>
        </div>
      </div>
    </VanForm>
  </div>
</template>
