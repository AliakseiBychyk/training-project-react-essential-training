module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3030
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["latest", "stage-0", "react"]
        }
      }
    ]
  }
}