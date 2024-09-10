<script setup lang="ts">
defineOptions({
  name: 'ContractId',
})
definePage({
  name: 'ContractId',
  meta: {
    title: '合约详情',
    level: 2,
  },
})

const state = reactive({
  talent: {
    name: '人才A',
    gender: '女',
    position: '前端工程师',
    source: '自营',
  },
  contract: {
    status: '待确认',
    name: '小程序开发1个月',
    type: '技术服务',
    salary: '6000',
    startDate: '2023-05-20',
    endDate: '2024-05-30',
    createdAt: '2023-04-30',
    pay: '按月结算',
    remark: '按需求完成',
    // totalProgress: 5,
    // currentProgress: 1,
  },
})
const contractKeys = ref(['合约状态', '合约名称', '签约类型', '任务薪资', '合约期限', '签约时间', '任务要求', '结薪方式', '薪资结算'])
const { refreshing, onRefresh } = useRefresh()
</script>

<template>
  <div class="pa-16 h-[calc(100vh-52px)]!">
    <VanPullRefresh v-model="refreshing" class="h-full" @refresh="onRefresh">
      <div class="h-full flex flex-col">
        <div class="contract__talent pa-16">
          <div class="flex gap-16">
            <div class="talent__avatar w-1/5">
              <img class="h-full w-full rounded-3xl" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
            </div>
            <div class="talent__info flex flex-1 flex-col gap-8">
              <div class="info__quickview flex items-center gap-12">
                <div class="text-7xl font-bold">
                  周杰伦
                </div>
                <div class="rounded-xl bg-orange-400 pa-4 text-5xl font-bold">
                  驻场
                </div>
                <div class="rounded-xl bg-green-400 pa-4 text-5xl font-bold">
                  驻场
                </div>
                <div class="rounded-xl bg-purple-400 pa-4 text-5xl font-bold">
                  全职
                </div>
              </div>
              <div class="info__basic flex gap-8 text-5xl">
                <div>前端工程师</div>
                <div>|</div>
                <div>5年</div>
                <div>|</div>
                <div>本科</div>
                <div>|</div>
                <div>23岁</div>
              </div>
              <div class="info__skill mt-auto flex gap-8">
                <VanTag>Vue.js</VanTag>
                <VanTag>Node.js</VanTag>
                <VanTag>小程序</VanTag>
              </div>
            </div>
          </div>
        </div>

        <div class="contract__content mt-16">
          <VanCellGroup>
            <VanCell v-for="(_value, _key, index) in state.contract" :key="_key" :title="contractKeys[index]" :value="_value" />
          </VanCellGroup>
        </div>

        <VanButton type="primary" class="mt-auto!" to="/contract/1/progress">
          合约进度
        </VanButton>
      </div>
    </VanPullRefresh>
  </div>
</template>
