module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.116.67.220:40005',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}