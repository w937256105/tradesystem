module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.116.67.220:90/domain',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: './',
  assetsDir: 'public'
}