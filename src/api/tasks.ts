import request from '@/utils/request'

interface Response {
  errors: null | any[]
  message: string
  result: {
    items: any[]
    meta: {
      itemsLength: number
      itemsPerPage: number
      page: number
      pagesLength: number
    }
  }
}
interface Payload {
  page: number
  itemsPerPage: number
}

export async function queryTasks(payload: Payload = {
  page: 1,
  itemsPerPage: 10,
}) {
  // return request('/tasks')
  return request<Response>('/api/system/actions', { params: payload })
}
