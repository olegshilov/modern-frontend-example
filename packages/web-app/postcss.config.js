module.exports = {
  modules: true,
  plugins: [
    [
      require.resolve('postcss-preset-env'),
      {
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      },
    ],
    require.resolve('cssnano'),
  ],
};
