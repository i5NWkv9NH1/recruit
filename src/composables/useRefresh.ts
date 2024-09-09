export function useRefresh(resetPaginate?: () => Promise<void> | void, resetLoadMore?: () => void) {
  const refreshing = ref(false)

  const onRefresh = async () => {
    refreshing.value = true
    resetLoadMore?.() // 重置上拉加载的状态
    await resetPaginate?.()
    refreshing.value = false
  }

  const resetRefresh = () => {
    refreshing.value = false
  }

  return {
    refreshing,
    onRefresh,
    resetRefresh,
  }
}
