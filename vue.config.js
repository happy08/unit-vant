module.exports = {
    publicPath:'./',
    //axios跨域代理
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5dbe9cb67a0e617ae42ee3ff/example/',  //域名
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
