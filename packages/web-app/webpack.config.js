const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  cache: true,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
          require.resolve('astroturf/loader'),
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      },
      {
        test: /\.(png|svg|gif|jpe?g|mp3|ttf|eot|woff|woff2|webm|mp4|wasm)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      global: JSON.stringify({}),
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development',
      ),
    }),
    new HtmlPlugin({
      title: 'ReactRedux Application',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(__dirname, 'dist/bundle-report.html'),
    }),
  ],
};
