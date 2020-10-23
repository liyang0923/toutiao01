


//配置请求模块 
import axios from 'axios'

//创建并配置 axios实例
const request = axios.create({
    baseURL:'http://api-toutiao-web.itheima.net/'
    // baseURL: 'http://ttapi.research.itcast.cn/app/'
})

//请求拦截器


// 响应拦截器

// 导入 axios 实例
export default request
