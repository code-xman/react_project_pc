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
        { path: '/react-hooks/useState', component: '@/pages/pageList/react-hooks/useState' },
        { path: '/react-hooks/useEffect', component: '@/pages/pageList/react-hooks/useEffect' },
        { path: '/form-a', component: '@/pages/pageList/form-a', routes: [
          { path: '/index', component: 'index' }
        ]},
        { path: '/sticky-scroll-table', component: '@/pages/pageList/sticky-scroll-table', routes: [
          { path: '/index', component: 'index' }
        ]},
      ]
    },
  ],
  fastRefresh: {},
});
