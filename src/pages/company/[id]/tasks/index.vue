<script setup lang="ts">
definePage({
  meta: {
    title: '该公司的任务',
    level: 2,
  },
})
</script>

<template>
  <div class="pa-16">
    <TaskSouring />
    <div class="task__sourcing my-32">
      <h2 class="souring__title">
        其他任务
      </h2>
      <TaskMini />
    </div>
  </div>
</template>
