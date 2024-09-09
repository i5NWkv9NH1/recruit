<script setup lang="ts">
definePage({
  name: 'MessageSystemId',
  meta: {
    title: '查看系统消息',
    level: 3,
  },
})
const route = useRoute<'MessageSystemId'>()
</script>

<template>
  <div class="bg-[var(--van-background-2)] pa-16">
    <div class="flex flex-col gap-16">
      <div class="headline mb-4 text-7xl">
        签约通知: {{ route.params.id }}
      </div>
      <div class="indent-2xl text-6xl text-gray-300 line-height-relaxed">
        恭喜您，您与顺德区去打网球哦i减肥去诶金额起飞起飞诶去接哦分秋分节气哦福建恶气哦分企鹅分解七佛鳄全家福。合约开始时间：2022/04/31，请前往我的合约中查看。
      </div>
    </div>
  </div>
</template>
