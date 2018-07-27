module.exports = {
  lazyLoad: true,
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    },
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=jsx harmony',
  ],
  routes: [{
    path: '/',
    component: './template/Archive',
  }, {
    path: '/docs/:post',
    dataPath: '/:post',
    component: './template/Post',
  }, {
    path: 'components/:component/',
    // dataPath: '/:component',
    component: './template/Component',
  }, {
    path: '/tags',
    component: './template/TagCloud',
  }],
};
