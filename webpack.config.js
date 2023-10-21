const path = require('path')
const PugPlugin = require('pug-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/views/index.pug',
    contact: './src/views/contact.pug',
    mech: './src/views/mech.pug',
    tires: './src/views/tires.pug',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      }
    ],
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
  ],
  resolve: {
    alias: {
      Images: path.join(__dirname, './src/assets/images/'),
      Fonts: path.join(__dirname, './src/assets/fonts/'),
      Views: path.join(__dirname, 'src/views/')
    }
  }
}
