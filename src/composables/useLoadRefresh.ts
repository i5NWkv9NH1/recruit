import { useLoadMore } from './useLoadMore'
import { useRefresh } from './useRefresh'

export function useLoadRefresh(...args: [{ loadPage: () => Promise<void> | void, resetPaginate: () => Promise<void> | void, hasNext: ComputedRef<boolean> }]) {
  const { loadPage, resetPaginate, hasNext } = args[0]

  const { loadMore, resetLoadMore, loading, finished } = useLoadMore(hasNext, loadPage)
  const { onRefresh, refreshing, resetRefresh } = useRefresh(resetPaginate, resetLoadMore)

  // Chainable API
  const instance = {
    loading,
    finished,
    refreshing,

    // Chainable methods
    _loadPage() {
      loadPage()
      return instance
    },

    _loadMore() {
      loadMore()
      return instance // return instance to enable chaining
    },

    _refresh() {
      onRefresh()
      return instance
    },

    _reset() {
      resetRefresh()
      resetLoadMore()
      resetPaginate()
      return instance
    },
  }

  return instance
}
