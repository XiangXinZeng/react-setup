const path = require('path')

module.exports = {
  mode:'production',

  devServer:{
    static:'./dist'
  },
  devtool:'source-map'
}