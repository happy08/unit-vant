/** 
 * api接口统一出口
 */

import { config } from '@/config'; // 导入接口域名
import axios from '@/config/axios'; // 导入axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const url = config.DOMAIN_WWW
//https://www.easy-mock.com/mock/5dbe9cb67a0e617ae42ee3ff/example/test?page=2&pageSize=10

// 新闻列表    
const list = (params) => {
  console.log('params', params,qs.stringify(params));
  return axios.get(`/api/test2/?${qs.stringify(params)}`); //test2
}

// post提交    
const login = (params) => {
  return axios.post(`${url}/accesstoken`, qs.stringify(params));
}


export default {
  list,
  login
}
