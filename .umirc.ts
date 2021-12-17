import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/', 
      component: '@/pages/index.tsx',
      routes: [
        { path: '/', component: '@/pages/pageList/home.jsx' },
        { path: '/page1', component: '@/pages/pageList/page1.jsx' },
        { path: '/form-a', component: '@/pages/pageList/form-a', routes: [
          { path: '/index', component: 'index' }
        ]},
        { path: '/table-a', component: '@/pages/pageList/table-a', routes: [
          { path: '/index', component: 'index' }
        ]},
      ]
    },
  ],
  fastRefresh: {},
});
