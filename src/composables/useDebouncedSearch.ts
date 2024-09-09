import { isEmpty } from 'lodash'
import { showNotify } from 'vant'

interface UseDebouncedSearchOptions {
  search: Ref<string> // 绑定的搜索关键字
  delay?: number // 防抖延迟时间，默认为 1000 毫秒
  loadPage: () => Promise<void> | void // 加载页面函数
  resets?: Array<() => void> // 可选的重置函数数组
  updateHistory?: (search: string) => void // 可选，更新历史的函数
}

export function useDebouncedSearch({
  search,
  delay = 1000,
  loadPage,
  resets = [], // 默认为空数组
  updateHistory = () => {}, // 默认为空函数
}: UseDebouncedSearchOptions) {
  const debounceTimeout = ref<ReturnType<typeof setTimeout> | null>(null)
  const controller = ref<AbortController | null>(null)
  const loading = ref(false)

  // 监听 search 值的变化，进行防抖处理
  watch(search, (_newSearch) => {
    if (debounceTimeout.value) {
      clearTimeout(debounceTimeout.value)
    }

    if (isEmpty(search.value)) {
      loading.value = false
      return
    }

    loading.value = true

    // 执行所有传入的重置函数
    resets.forEach(resetFn => resetFn())

    debounceTimeout.value = setTimeout(async () => {
      if (controller.value) {
        controller.value.abort() // 中止上一个请求
      }

      updateHistory(search.value) // 更新搜索历史

      controller.value = new AbortController()

      try {
        await loadPage() // 进行页面加载
      }
      catch (error) {
        showNotify(`请求错误: ${error}`)
        console.error(error)
      }
      finally {
        loading.value = false
      }
    }, delay)
  })

  // 清除状态
  const reset = () => {
    if (debounceTimeout.value) {
      clearTimeout(debounceTimeout.value)
    }
    if (controller.value) {
      controller.value.abort()
    }
    search.value = ''
    loading.value = false
  }

  return {
    loading,
    reset,
  }
}
