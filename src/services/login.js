import request from ''
export const long = (query) => {
  return request({
    url: '/web',
    method: 'get',
    params: query,
  })
}
