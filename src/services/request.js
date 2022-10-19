import $http from '@/libs/http.js'

/**
 * @desc 登录 LOGIN
 * @param userName {string} 用户名
 * @param password {string} 密码
 * @return access_token {string} 秘钥
 */

export const LOGIN = (params) => {
  return $http.get('/api/login', params)
}
