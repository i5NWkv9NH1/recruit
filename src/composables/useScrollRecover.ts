import type { Ref } from 'vue'

export function useScrollRecover(el: Ref<HTMLElement | undefined>) {
  // 用于记录滚动位置的变量
  const scrollTop = ref(0)

  // 滚动响应处理函数，在事件中记录滚动位置
  const onScroll = () => {
    scrollTop.value = unref(el)?.scrollTop || 0
  }

  // mounted时监听scroll事件
  onMounted(() => {
    unref(el)?.addEventListener('scroll', onScroll)
  })

  // keep-alive激活时会自动调用actived钩子，此时将容器的滚动高度设置为记录的值
  onActivated(() => {
    if (unref(el))
      (unref(el) as HTMLElement).scrollTop = unref(scrollTop)
  })

  // unmounted时记得取消监听
  onUnmounted(() => {
    unref(el)?.removeEventListener('scroll', onScroll)
  })
}
