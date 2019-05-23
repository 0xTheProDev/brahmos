module.exports = {
  'presets': ['@babel/preset-env'],
  'plugins': [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-object-rest-spread', {}, 'rest-spread'],
    './src/babel/index.js',
  ],
};
