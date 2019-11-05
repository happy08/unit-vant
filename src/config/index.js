const development = {  //临时本地配置
  DOMAIN_BASE: 'localhost:8080',
  DOMAIN_WWW: 'https://www.juhe.cn/', //http://localhost:8080
  //更多域名
  //DOMAIN_MAIN: '',
  API_PATH: 'api/',
  API_VERSION: '1.0/',
}

const production = {  //上线配置
  DOMAIN_BASE: 'test.com',
  DOMAIN_WWW: 'https://test.com',
  //更多域名
  //DOMAIN_MAIN: '',
  API_PATH: 'api/',
  API_VERSION: '',
}

const isDev = process.env.NODE_ENV === 'development'
let configs = {}
if (isDev) configs = development
else configs = production

//导出测试线上配置
export const config = configs

//默认分页
export const pages = {
  pageCur: 1,
  pageLimit: 10
}


//其他常量...
