<script setup lang="ts">
import { definePage } from 'unplugin-vue-router/runtime'
import MyManager from './components/MyManager.vue'

definePage({
  name: 'My',
  meta: {
    title: '我的',
    level: 1,
    customNavbar: true,
  },
})
const router = useRouter()
const { refreshing, onRefresh } = useRefresh()
const dialog = ref(false)
const enterprise = ref([
  { label: '任务管理', badge: 6, icon: '', to: '/my/task' },
  { label: '合约管理', badge: 6, icon: '', to: '' },
  { label: '体验金', badge: 6, icon: '', to: '/my/coupon' },
])
</script>

<template>
  <div>
    <VanNavBar title="个人主页" class="navbar bg-[var(--van-primary-color)]! text-white!">
      <template #right>
        <div class="i-carbon-settings h-20 w-20" @click="router.push('/my/settings')" />
      </template>
    </VanNavBar>

    <VanPullRefresh v-model="refreshing" @refresh="onRefresh">
      <div>
        <div class="info pos-relative h-140 pa-16 pr-0 bg-[var(--van-primary-color)]!" @click="router.push('/my/profile')">
          <div class="flex items-center justify-between gap-12">
            <div class="avatar">
              <img class="h-70 w-70 rounded-full" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
            </div>
            <div class="flex flex-1 flex-col gap-8">
              <div class="text-7xl text-white">
                陈晓晓
              </div>
              <div class="text-6xl text-gray-200 font-light">
                <Role>
                  <template #user>
                    IT企业人才
                  </template>
                  <template #enterprise>
                    IT企业
                  </template>
                  <template #admin>
                    管理员
                  </template>
                </Role>
              </div>
            </div>
            <div class="flex items-center justify-center gap-8 rounded-full rounded-r bg-amber-200 px-10 py-6 pr-12" @click.stop="router.push('/my/account')">
              <div class="i-carbon-wallet bg-[rgb(224,163,89)]" />
              <span class="text-6xl text-[rgb(192,142,108)]">我的账户</span>
            </div>
          </div>

          <div class="pos-absolute left-2/4 top-100 mx-auto h-fit w-9/10 flex translate-x--2/4 translate-y-0 rounded-2xl bg-[var(--van-background-2)]">
            <div class="w-full flex items-center justify-evenly pa-16">
              <VanBadge class="flex-1">
                <div class="flex flex-col items-center gap-12 text-center" @click.stop="router.push('/my/collection')">
                  <div class="i-carbon-star-filled h-40 w-40 bg-blue-400" />
                  <div class="text-5xl">
                    我的收藏
                  </div>
                </div>
              </VanBadge>
              <Role>
                <template #user>
                  <VanBadge class="flex-1">
                    <div class="flex flex-col items-center" @click.stop="router.push('/my/resume')">
                      <div class="i-carbon-book h-40 w-40 bg-yellow-400" />
                      <div class="text-5xl">
                        我的简历
                      </div>
                    </div>
                  </VanBadge>
                </template>
                <template #enterprise>
                  <VanBadge v-for="e in enterprise" :key="e.label" :content="e.badge" class="flex-1" :offset="[-15, 5]" :data-router="e.to">
                    <div class="flex flex-col items-center gap-12" @click.stop="router.push(e.to)">
                      <div class="i-carbon-book h-40 w-40 bg-yellow-400" />
                      <div class="text-5xl">
                        {{ e.label }}
                      </div>
                    </div>
                  </VanBadge>
                </template>
              </Role>
            </div>
          </div>
        </div>

        <!-- * 我的合约 -->
        <div class="contract mt-50 pa-16">
          <div class="bg-[var(--van-background-2)] px-16 pb-16">
            <div class="contract__headline flex items-center justify-between">
              <h3 class="headline__title text-7xl">
                我的合约
              </h3>
              <div class="headline__actions flex items-center gap-8" @click="router.push('/contract')">
                <div class="text-5xl text-gray-300">
                  查看全部合约
                </div>
                <div class="i-carbon-chevron-right" />
              </div>
            </div>

            <div class="contract__items flex justify-between gap-8">
              <Role>
                <template #enterprise>
                  <div class="item__actions flex flex-col items-center gap-8 pa-8" @click="router.push({ name: 'Contract', query: { tab: 0 } })">
                    <div class="i-carbon-list h-40 w-40" />
                    <span class="text-5xl text-gray-300">待发送</span>
                  </div>
                </template>
              </Role>
              <div class="item__actions flex flex-col items-center gap-8 pa-8" @click="router.push({ name: 'Contract', query: { tab: 1 } })">
                <div class="i-carbon-list h-40 w-40" />
                <span class="text-5xl text-gray-300">待签约</span>
              </div>
              <div class="item__actions flex flex-col items-center gap-8 pa-8" @click="router.push({ name: 'Contract', query: { tab: 2 } })">
                <div class="i-carbon-list h-40 w-40" />
                <span class="text-5xl text-gray-300">履约中</span>
              </div>
              <div class="item__actions flex flex-col items-center gap-8 pa-8" @click="router.push({ name: 'Contract', query: { tab: 3 } })">
                <div class="i-carbon-list h-40 w-40" />
                <span class="text-5xl text-gray-300">已完成</span>
              </div>
              <div class="item__actions flex flex-col items-center gap-8 pa-8" @click="router.push({ name: 'Contract', query: { tab: 4 } })">
                <div class="i-carbon-list h-40 w-40" />
                <span class="text-5xl text-gray-300">已失效</span>
              </div>
            </div>
          </div>
        </div>

        <!-- * 常用功能 -->
        <div class="feature pa-16">
          <div class="bg-[var(--van-background-2)]">
            <div class="feature__headline py-8">
              <div class="headline__title">
                <h3 class="px-16 text-7xl">
                  常用功能
                </h3>
              </div>
            </div>
            <div class="feature__items">
              <van-cell-group class="mb-16! after:content-none!">
                <van-cell title="实名认证" is-link to="/my/auth-real" icon="location-o" :border="false" />
                <Role>
                  <template #enterprise>
                    <van-cell title="企业认证" is-link to="/my/auth-real" icon="location-o" :border="false" />
                  </template>
                </Role>
                <van-cell title="专属客户经理" is-link icon="location-o" :border="false" @click="dialog = true">
                  <template #value>
                    <div class="h-full flex items-center justify-end gap-4">
                      <div class="avatar h-20 w-20">
                        <img class="h-full w-full rounded-full" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
                      </div>
                      <div class="name text-5xl">
                        林小小经理
                      </div>
                    </div>
                  </template>
                </van-cell>
                <MyManager v-model="dialog" />
              </van-cell-group>
              <van-cell-group class="mb-16! after:content-none!">
                <van-cell title="意见反馈" is-link to="/" icon="location-o" :border="false" />
                <van-cell title="关于我们" is-link to="/" icon="location-o" :border="false" />
              </van-cell-group>
              <van-cell-group class="mb-16! after:content-none!">
                <van-cell title="切换身份" is-link to="/my/switch-role" icon="location-o" :border="false">
                  <template #value>
                    <span class="block translate-y-6 truncate text-5xl">
                      当前为IT企业人才身份当前为IT企业人才身份当前为IT企业人才身份当前为IT企业人才身份
                    </span>
                  </template>
                </van-cell>
              </van-cell-group>
            </div>
          </div>
        </div>
      </div>
    </VanPullRefresh>
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
