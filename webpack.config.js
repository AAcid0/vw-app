const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    assetModuleFilename: 'images/[hash][ext][query]'
  },    
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [ "@babel/preset-env","@babel/preset-react"]
        }
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          use: [{
            loader: 'url-loader',
            options: {
              esModule:  false
            }
          }]
      }
        ,
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
      inject: "body"
    }),
  ]
  

}