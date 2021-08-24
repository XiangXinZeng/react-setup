const path = require('path')

module.exports = {
  mode:'production',
  module:{
    rules:[
      {
        test:/\.js$/i,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  },

  devServer:{
    static:'./dist',
    open:true
  },
  devtool:'source-map'
}