//导入请求实例
import request from '@/utils/request.js'

//登陆请求实例
export const login = data => {
    return request({
        method:'post',
        url:'/app/v1_0/authorizations',
        data
    })
}