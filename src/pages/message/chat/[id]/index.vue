<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'

definePage({
  name: 'MessageChatId',
  meta: {
    title: '聊天',
    level: 2,
  },
})
const route = useRoute<'MessageChatId'>()
const state = reactive({
  finished: false,
  loading: false,
  messages: [
    { id: 1, text: 'Hello, how are you?', sender: 'other' },
    { id: 2, text: 'I am good, thanks! How about you?', sender: 'me' },
    { id: 3, text: 'I am doing well, too.', sender: 'other' },
    { id: 4, text: 'What have you been up to lately?', sender: 'me' },
    { id: 5, text: 'Just working on some projects.', sender: 'other' },
    { id: 6, text: 'That sounds interesting!', sender: 'me' },
    { id: 7, text: 'That sounds interesting!', sender: 'me' },
    { id: 8, text: 'That sounds interesting!', sender: 'me' },
    { id: 9, text: 'That sounds interesting!', sender: 'me' },
    { id: 10, text: 'That sounds interesting!', sender: 'me' },
    { id: 11, text: 'That sounds interesting!', sender: 'me' },
    { id: 12, text: 'That sounds interesting!', sender: 'me' },
    { id: 13, text: 'That sounds interesting!', sender: 'me' },
    { id: 14, text: 'That sounds interesting!', sender: 'me' },
  ],
})
function generateRandomMessage() {
  const messages = [
    'That’s great to hear!',
    'How’s your day going?',
    'I’m working on something exciting!',
    'Let’s catch up soon.',
    'It’s been a while!',
    'What are you working on right now?',
    'Let me know if you need any help.',
  ]
  const sender = Math.random() > 0.5 ? 'me' : 'other'
  return {
    id: state.messages.length + 1,
    text: messages[Math.floor(Math.random() * messages.length)],
    sender,
  }
}
async function _onLoad() {
  state.loading = true
  await promiseTimeout(1000)
  for (let i = 0; i < 5; i++) {
    state.messages.unshift(generateRandomMessage()) // 加载5条新消息
  }
  state.finished = state.messages.length > 1000 // 假设最多加载30条历史记录
  state.loading = false
}

onMounted(() => {
  const _router = useRouter()
  route.meta.title = '123'
})
</script>

<template>
  <div class="bg-[var(--van-background-2)] pa-16" :data-id="route.params.id">
    <div id="chatContainer" class="flex-1 overflow-auto">
      <!-- <VanList v-model:loading="state.loading" direction="up" :offset="1000" :finished="state.finished" @load="onLoad">
        <div v-for="message in state.messages" :key="message.id" class="message-container">
          <div class="message" :class="[message.sender === 'me' ? 'message--me' : 'message--other']">
            <p class="message-text">
              {{ message.text }}
            </p>
          </div>
        </div>
      </VanList> -->
      <div v-for="message in state.messages" :key="message.id" class="message-container">
        <div class="message" :class="[message.sender === 'me' ? 'message--me' : 'message--other']">
          <p class="message-text">
            {{ message.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.message-container {
  display: flex;
  margin-bottom: 16px;
}

.message {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 1.4;
  word-wrap: break-word;
}

.message--me {
  background-color: #daf8cb;
  align-self: flex-end;
}

.message--other {
  background-color: #f1f1f1;
  align-self: flex-start;
}

.message-text {
  margin: 0;
}
</style>
