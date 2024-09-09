<script setup lang="ts">
const emits = defineEmits<{
  (e: 'submit', value: string): Promise<any>
}>()

const state = reactive({
  text: '',
  show: false,
})
async function _onSubmit() {
  await emits('submit', state.text)
}
</script>

<template>
  <div class="container">
    <div class="input flex items-center justify-between">
      <div class="input__quick-text">
        <VanButton>常用语</VanButton>
      </div>
      <div class="input__text">
        <VanField v-model="state.text" />
      </div>
      <div class="input__actions">
        <VanButton>发送</VanButton>
      </div>
    </div>
    <div class="quick" />
  </div>
</template>
