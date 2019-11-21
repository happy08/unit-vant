import axios from 'axios' // 引入axios
import router from '@/router';
import store from '@/store/index';
// vant提示框组件
import { Toast } from 'vant';

// 创建axios实例
let instance = axios.create({
  timeout: 8000,
  //withCredentials: true,  // 设置 withCredentials 使请求带上 `cookies`
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const tip = (msg, duration = 2000) => {
  Toast({
    message: msg,
    duration: duration,
    forbidClick: true
  });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401: toLogin(); break;
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token'); // 清除token并跳转登录页
      //store.commit('loginSuccess', null);
      setTimeout(() => { toLogin() }, 1000);
      break;
    case 404: tip('请求的资源不存在'); break;
    case 408: tip('请求超时'); break;
    case 500: tip('服务器错误'); break;
    case 501: tip('服务未实现'); break;
    case 502: tip('网络错误'); break;
    case 503: tip('服务不可用'); break;
    case 504: tip('网络超时'); break;
    case 505: tip('HTTP版本不受支持'); break;
    default: tip(`连接出错(${status})!`);
  }
}

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
window.__axiosPromiseArr = []
instance.interceptors.request.use(
  config => {
    const token = store.state.token
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
    // 后台加上跨域和放开Authorization权限
    token && (config.headers['Authorization'] = token)
    // token && (config.headers.token = token)
    config.cancelToken = new axios.CancelToken(cancel => {
      //取消请求存在全局，切换路由时执行
      window.__axiosPromiseArr.push({ cancel })
    })
    return config;
  },
  error => Promise.error(error)
)


// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围 
      errorHandle(response.status);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      //console.log('error',error);
      if (window.__axiosPromiseArr.length !== 0) { //非用户取消
        tip('网络异常');
      }
    }
  });




export default instance
