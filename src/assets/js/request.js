const axios = require('axios')
import { Message } from 'element-ui'

const axiosInstance = axios({
  baseUrl: process.env.VUE_APP_BASE_API
})

// 二次封装 拦截所有报错给出提示
const service = (config = {}) => {
  return new Promise((resolve, reject) => {
    axiosInstance(config).then(res => {
      resolve(res)
    }).catch(err => {
      // 首先所有的错误都报个错
      Message({
        message: err.errMsg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      reject(err)
    })
  })
}

export default service
