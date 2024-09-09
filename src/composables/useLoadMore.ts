export function useLoadMore(hasNext: ComputedRef<boolean>, loadPage?: () => Promise<void> | void) {
  const loading = ref(false)
  const finished = ref(false)

  const loadMore = async () => {
    loading.value = true
    await loadPage?.()
    loading.value = false

    if (!hasNext.value) {
      finished.value = true
    }
  }

  const resetLoadMore = () => {
    finished.value = false
    loading.value = false
  }

  return {
    loading,
    finished,
    loadMore,
    resetLoadMore,
  }
}
