import request from '@/http'
export const long = (query) => {
  return request({
    url: '/web',
    method: 'get',
    params: query,
  })
}
