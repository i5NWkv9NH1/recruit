<script setup lang="ts">
import { isEmpty } from 'lodash-es'

definePage({
  name: 'TalentId',
  meta: {
    title: '人才详情',
    level: 2,
    customNavbar: true,
  },
})
const router = useRouter()
const { refreshing, onRefresh } = useRefresh()
function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const state = reactive({
  isCollected: false,
  basic: {
    name: '林小小',
    avatarUrl: 'https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp',
    position: '前端工程师',
    gender: '男',
    exprience: 8,
    age: 23,
    projectCount: 2,
    intro: `熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html熟练使用html`,
    tag: { label: '精选人才', color: 'primary' },
    skills: [
      { label: 'Vue.js', color: '' },
      { label: 'Node.js', color: '' },
      { label: 'React.js', color: '' },
    ],
    supportWays: [
      { label: '驻场', color: 'gray' },
      { label: '远程', value: 'green' },
    ],
  },
  resume: {
    work: { title: '工作经历', items: [
      { company: '北京XXXX科技有限公司', position: '前端工程师', startDate: '2020.07.01', endDate: '2020.07.01', content: `1. ....<br> 2. .... <br> 3. .... <br> 4. ... <br>` },
      { company: '北京XXXX科技有限公司', position: '前端工程师', startDate: '2020.07.01', endDate: '2020.07.01', content: `1. ....<br> 2. .... <br> 3. .... <br> 4. ... <br>` },
      { company: '北京XXXX科技有限公司', position: '前端工程师', startDate: '2020.07.01', endDate: '2020.07.01', content: `1. ....<br> 2. .... <br> 3. .... <br> 4. ... <br>` },
      { company: '北京XXXX科技有限公司', position: '前端工程师', startDate: '2020.07.01', endDate: '2020.07.01', content: `1. ....<br> 2. .... <br> 3. .... <br> 4. ... <br>` },
    ] },
    educations: { title: '教育经历', items: [] },
    projects: { title: '项目经历', items: [] },
  },
})
</script>

<template>
  <div>
    <VanNavBar title="人才详情" class="navbar bg-[var(--van-primary-color)] text-white!" @click-left="onBack">
      <template #left>
        <div class="i-carbon-chevron-left h-20 w-20" />
      </template>
    </VanNavBar>

    <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
      <div>
        <div class="info pos-relative h-140 pa-16 pr-0 bg-[var(--van-primary-color)]!">
          <div class="pos-absolute h-170 w-9/10 flex rounded-2xl bg-[var(--van-background)] shadow-xl">
            <div class="justify between w-full flex items-center gap-18 pa-16">
              <div class="left h-full flex flex-col justify-around">
                <div class="avatar">
                  <img class="h-70 w-70 flex rounded-3xl" :src="state.basic.avatarUrl">
                </div>
                <div class="tag">
                  <VanTag
                    class="rounded-full!" size="large" :class="[
                      `bg-[var(--van-${state.basic.tag.color}-color)]!`,
                    ]"
                  >
                    {{ state.basic.tag.label }}
                  </VanTag>
                </div>
              </div>
              <div class="right h-full flex flex-1 flex-col justify-around">
                <div class="flex items-end gap-8">
                  <div class="text-8xl">
                    {{ state.basic.name }}
                  </div>
                  <div class="tag h-full flex items-center gap-4 text-5xl">
                    <VanTag
                      v-for="w in state.basic.supportWays" :key="w.label" class="rounded-full" :class="[
                        `bg-${w.color}`,
                      ]"
                    >
                      {{ w.label }}
                    </VanTag>
                  </div>
                </div>
                <div class="flex-8 w-full flex gap-16 text-6xl font-light">
                  <div>{{ state.basic.position }}</div>
                  <div>|</div>
                  <div>{{ state.basic.gender }}</div>
                </div>

                <dl class="ma-0 w-full flex gap-16">
                  <dt class="flex-1">
                    <div class="my-4 flex items-center gap-1 font-bold">
                      <div class="text-7xl">
                        {{ state.basic.exprience }}
                      </div>
                      <div class="text-5xl">
                        年
                      </div>
                    </div>
                    <div class="text-6xl text-[var(--van-text-color)] font-light">
                      经验
                    </div>
                  </dt>
                  <dt class="flex-1">
                    <div class="my-4 flex items-center gap-1 font-bold">
                      <div class="text-7xl">
                        {{ state.basic.age }}
                      </div>
                      <div class="text-5xl">
                        岁
                      </div>
                    </div>
                    <div class="text-6xl text-[var(--van-text-color)] font-light">
                      年龄
                    </div>
                  </dt>
                  <dt class="flex-1">
                    <div class="my-4 flex items-center gap-1 font-bold">
                      <div class="text-7xl">
                        {{ state.basic.projectCount }}
                      </div>
                      <div class="text-5xl">
                        个
                      </div>
                    </div>
                    <div class="text-6xl text-[var(--van-text-color)] font-light">
                      项目
                    </div>
                  </dt>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="px-16 pt-80">
          <div class="intro flex flex-col gap-16 text-6xl">
            <p class="ma-0 text-6xl">
              {{ state.basic.intro }}
            </p>
            <div class="tags flex items-center gap-8">
              <VanTag v-for="s in state.basic.skills" :key="s.color" :class="[`bg-${s.color}`]">
                {{ s.label }}
              </VanTag>
            </div>
          </div>

          <div class="resume my-16 flex flex-col gap-16">
            <div v-for="(value, key) in state.resume" :key="key" :data-key="key">
              <div class="title">
                <h2 class="text-8xl">
                  {{ value.title }}
                </h2>
              </div>
              <div v-if="!isEmpty(value.items)" class="items flex flex-col gap-16">
                <div v-for="(j, index) in value.items" :key="index" class="item flex flex-col gap-8">
                  <template v-if="key === 'work'">
                    <h3 class="text-7xl">
                      {{ j.company }}
                    </h3>
                    <div class="text-6xl">
                      {{ j.position }}
                    </div>
                    <div class="text-5xl font-light">
                      {{ j.startDate }} - {{ j.endDate }}
                    </div>
                    <div class="content text-6xl" v-html="j.content" />
                  </template>
                  <template v-else>
                    <div>Others</div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VanPullRefresh>

    <!-- pos-fixed will not work `w-full` -->
    <div class="talent__actions pos-sticky pos-bottom-0 z-2 h-60 w-full bg-[var(--van-background-2)] pa-16">
      <div class="h-full w-fit w-full flex items-center gap-16">
        <div
          class="w-40 flex flex-col items-center gap-4 text-center" @click.stop="() => state.isCollected = !state.isCollected"
        >
          <div
            class="block h-24 w-32 text-[var(--van-primary-color)]" :class="[
              state.isCollected ? 'i-carbon-star-filled' : 'i-carbon-star',
            ]"
          />
          <span class="text-5xl">
            {{ state.isCollected ? '已收藏' : '收藏' }}
          </span>
        </div>
        <VanButton class="flex-1 border-none! bg-[var(--van-primary-color)]!" @click="router.push('/message/chat/1')">
          立即沟通
        </VanButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar::after {
  display: none;
}
.navbar :deep(.van-nav-bar__title) {
  color: white;
}
</style>
