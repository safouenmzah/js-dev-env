import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,//display the list of all the files webpack is bundling
  entry: [
    path.resolve(__dirname, 'src/index') //resolving path using path package and __dirname
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
