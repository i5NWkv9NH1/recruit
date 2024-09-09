/* eslint-disable no-console */
import { ref } from 'vue'
import { isEmpty } from 'lodash' // 使用 lodash 的 isEmpty 函数

export function usePaginationMock(itemsLength: number, initAfterReset = true) {
  const items = ref<string[]>([]) // 保存分页加载的数据
  const meta = ref({
    page: 1, // 当前页数
    itemsPerPage: 10, // 每页条数
    itemsLength, // 总条数
    pagesLength: 0, // 总页数
    hasNext: false, // 是否有下一页
  })

  // 生成随机字符串的函数
  const generateRandomString = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  // 生成指定数量的 mock 数据
  const generateMockData = () => {
    const mockData = []
    for (let i = 0; i < meta.value.itemsLength; i++) {
      mockData.push(generateRandomString(10)) // 每个字符串长度为10
    }
    return mockData
  }

  const totalData = generateMockData() // 生成总的数据

  // 更新 meta 的状态，包括 pagesLength 和 hasNext
  const updateMeta = () => {
    const totalPages = Math.ceil(totalData.length / meta.value.itemsPerPage)
    meta.value.pagesLength = totalPages
    meta.value.hasNext = meta.value.page < totalPages
    if (meta.value.hasNext) {
      meta.value.page = meta.value.page + 1
    }
  }

  // 分页加载函数
  const loadPage = () => {
    console.info('load page')
    const totalPages = Math.ceil(totalData.length / meta.value.itemsPerPage)

    // 确保页码在有效范围内
    const currentPage = meta.value.page
    if (currentPage > totalPages)
      return

    // 计算开始和结束索引
    const start = (currentPage - 1) * meta.value.itemsPerPage
    const end = start + meta.value.itemsPerPage

    // 获取当前页的 items
    const paginatedItems = totalData.slice(start, end)

    // 更新 items
    items.value = [...items.value, ...paginatedItems]

    // 更新 meta 信息
    updateMeta()
  }

  // 加载更多函数，自动加载下一页
  const loadMore = () => {
    if (meta.value.hasNext) {
      meta.value.page += 1 // 自动增加页码
      loadPage() // 调用分页加载函数
    }
  }

  // 重置函数
  const resetPaginate = () => {
    meta.value.page = 1
    meta.value.pagesLength = Math.ceil(totalData.length / meta.value.itemsPerPage)
    meta.value.hasNext = meta.value.page < meta.value.pagesLength
    items.value = []
    // loadPage() // 初始化加载第一页
    if (initAfterReset) {
      loadPage()
    }
  }

  // 初始化时加载第一页
  // loadPage()

  return {
    items,
    meta,
    empty: computed(() => isEmpty(items.value)), // 使用 lodash 的 isEmpty 来判断是否为空,
    hasNext: computed(() => meta.value.hasNext),
    loadPage,
    loadMore,
    resetPaginate,
  }
}
