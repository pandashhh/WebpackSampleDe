var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'react','lodash','redux','faker','react-redux','react-dom','react-router','react-input-range',
  'redux-form','redux-thunk'
];

module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader', 'css-loader'],
        test:/\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'vender'
    })
  ]
};
