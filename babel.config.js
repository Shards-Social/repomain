module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: 'defaults',
        sourceType: 'module'
      }]
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs'
    ]
  };
  