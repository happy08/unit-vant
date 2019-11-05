module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 32,//结果为：设计稿元素尺寸32px=1rem，比如元素宽750px,最终页面会换算成 1rem
      propList: ['*']
    }
  }
}