<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="message mb-32 flex flex-col rounded-3xl bg-[var(--van-background-2)] pa-16" @click="() => { router.push(`/message/system/1`) }">
    <div class="message__headline flex items-center justify-between">
      <div class="headline__title">
        <h3 class="my-0 text-7xl">
          签约通知
        </h3>
      </div>
      <div class="headline__date text-4xl text-gray-300">
        2022.03.24 16:20
      </div>
    </div>

    <VanDivider />

    <div class="message__content text-gray-300">
      <p class="line-clamp-4 text-6xl line-height-relaxed">
        恭喜您，您与重庆蚂蚁科技有限公司签约成功，合约开始日期：2022.03.24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。
        恭喜您，您与重庆蚂蚁科技有限公司签约成功，合约开始日期：2022.03.24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。
        恭喜您，您与重庆蚂蚁科技有限公司签约成功，合约开始日期：2022.03.24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。
        恭喜您，您与重庆蚂蚁科技有限公司签约成功，合约开始日期：2022.03.24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。24。请快到我的合约中查看。。。。
      </p>
    </div>

    <VanDivider />

    <div class="message__actions h-20 flex">
      <div class="h-full w-full flex flex-1 items-center justify-center text-6xl text-gray-300">
        <span>点击查看</span>
        <div class="i-carbon-chevron-right" />
      </div>
    </div>
  </div>
</template>
