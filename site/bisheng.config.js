const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  source: {
    components: './components',
    docs: './docs',
  },
  theme: path.resolve(__dirname, 'bisheng-theme-pile'),
  themeConfig: {
    home: '/',
    sitename: 'pile',
    // tagline: 'pile theme',
    navigation: [{
      title: 'pile-ui',
      link: 'https://github.com/didi/pile.js',
    }],
    footer: 'Copyright © 2018 滴滴企业版设计体验技术部联合出品',
    // hideBisheng: true,
    github: 'https://github.com/didi/pile.js',
  },
  root: '/',
  webpackConfig(config) {
    const conf = config;
    conf.resolve.alias = {
      'pile-ui': path.join(process.cwd(), 'components'),
    };

    if (isDev) {
      conf.devtool = 'source-map';
    }
    return conf;
  },
};
