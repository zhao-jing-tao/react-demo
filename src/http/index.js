import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
  baseURL: 'http://www.baidu.com',
  timeout: 5000,
})
//请求拦截
service.interceptors.request.use(
  (config) => {
    //获取存储起来的token值
    const token = '123456'
    config.headers['token'] = token
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
//响应拦截
service.interceptors.response.use(
  (res) => {
    const code = res.data.code || 200
    //判断状态码code进行提示
    if (code === 500) {
    }
    return res.data
  },
  (error) => {
    const status = error.response.status
    if (status === 404) {
      //跳转其他错误页面或者登录页
    }
    return Promise.reject(error)
  }
)
export default service
