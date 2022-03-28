const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
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
      template: path.join(__dirname, "src", "index.html"),
      favicon: "./src/favicon/favicon-32x32.png",
      filename: "index.html",
      inject: "body"
    })
  ]
  

}