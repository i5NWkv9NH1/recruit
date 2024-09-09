<script setup lang="ts">
</script>

<template>
  <div class="talent flex flex-col gap-32 rounded-2xl pa-16 shadow-xl">
    <div class="flex gap-16">
      <div class="talent__avatar w-1/4">
        <img class="h-full w-full rounded-3xl" src="https://p9-passport.byteacctimg.com/img/user-avatar/48923ae7f200e633a325d9a9c5d925c9~200x200.awebp">
      </div>
      <div class="talent__info flex flex-1 flex-col gap-8">
        <div class="info__quickview flex items-center gap-4">
          <div class="font-bold">
            周杰伦
          </div>
          <div class="rounded-xl bg-orange-400 pa-4 text-5xl text-gray-300 font-bold">
            驻场
          </div>
          <div class="rounded-xl bg-green-400 pa-4 text-5xl text-gray-300 font-bold">
            驻场
          </div>
          <div class="rounded-xl bg-purple-400 pa-4 text-5xl text-gray-300 font-bold">
            全职
          </div>
        </div>
        <div class="info__basic flex gap-8 text-5xl text-gray-300">
          <div>前端工程师</div>
          <div>|</div>
          <div>5年</div>
          <div>|</div>
          <div>本科</div>
          <div>|</div>
          <div>23岁</div>
        </div>
        <div class="info__skill flex gap-8">
          <VanTag>Vue.js</VanTag>
          <VanTag>Node.js</VanTag>
          <VanTag>小程序</VanTag>
        </div>
      </div>
    </div>
    <div class="talent__more flex justify-between text-5xl text-gray-300 font-light">
      <div>已完成100个项目</div>
      <div class="location">
        <VanIcon name="location-o">
          北京
        </VanIcon>
      </div>
    </div>
  </div>
</template>
