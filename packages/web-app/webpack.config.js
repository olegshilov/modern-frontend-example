const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

function getRules() {
  const rules = [];

  rules.push({
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
  });

  rules.push({
    test: /\.css$/,
    use: [
      {
        loader: isProduction
          ? MiniCssExtractPlugin.loader
          : require.resolve('style-loader'),
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, 'postcss.config.js'),
          },
        },
      },
    ],
  });

  rules.push({
    test: /\.(png|svg|gif|jpe?g|mp3|ttf|eot|woff|woff2|webm|mp4|wasm)$/,
    type: 'asset/resource',
  });

  return rules;
}

function getPlugins() {
  const plugins = [];

  plugins.push(new MiniCssExtractPlugin());

  plugins.push(new ForkTsCheckerWebpackPlugin());

  plugins.push(
    new DefinePlugin({
      global: JSON.stringify({}),
      'process.env': JSON.stringify({}),
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development',
      ),
    }),
  );

  plugins.push(
    new HtmlPlugin({
      title: 'Web Application',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  );

  if (isProduction) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: path.resolve(__dirname, 'dist/bundle-report.html'),
      }),
    );
  }

  return plugins;
}

function getConfig() {
  console.log(
    `webpack run in ${isProduction ? 'production' : 'development'} mode`,
  );

  return {
    mode: isProduction ? 'production' : 'development',
    target: 'browserslist',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      port: 3000,
      hot: true,
    },
    cache: true,
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
      rules: getRules(),
    },
    plugins: getPlugins(),
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
      minimizer: isProduction
        ? [
            new TerserPlugin({
              parallel: true,
              terserOptions: {
                format: {
                  comments: false,
                },
              },
            }),
          ]
        : undefined,
    },
  };
}

module.exports = getConfig;
