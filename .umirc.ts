import { defineConfig } from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const config = defineConfig({
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
        {
          path: '/react-hooks/useState',
          component: '@/pages/pageList/react-hooks/useState',
        },
        {
          path: '/react-hooks/useEffect',
          component: '@/pages/pageList/react-hooks/useEffect',
        },
        {
          path: '/react-hooks/myHook',
          component: '@/pages/pageList/react-hooks/myHook',
        },
        {
          path: '/react-hooks/useContext',
          component: '@/pages/pageList/react-hooks/useContext',
        },
        {
          path: '/react-hooks/useReducer',
          component: '@/pages/pageList/react-hooks/useReducer',
        },
        {
          path: '/react-hooks/CallbackMemo',
          component: '@/pages/pageList/react-hooks/CallbackMemo',
        },
        {
          path: '/form-a',
          component: '@/pages/pageList/form-a',
          routes: [{ path: '/index', component: 'index' }],
        },
        {
          path: '/sticky-scroll-table',
          component: '@/pages/pageList/sticky-scroll-table',
          routes: [{ path: '/index', component: 'index' }],
        },
        {
          path: '/Editor',
          component: '@/pages/pageList/Editor',
          routes: [{ path: '/index', component: 'index' }],
        },
      ],
    },
  ],
  fastRefresh: {},
});

const myConfig = {
  chainWebpack: (config: any, { webpack }: { webpack: any }) => {
    config.plugin('monaco-editor-webpack-plugin').use(MonacoWebpackPlugin, [
      // 按需配置
      {
        languages: ['javascript', 'css', 'html', 'json'],
        features: ['coreCommands', 'find'],
      },
    ]);
  },
};

Object.assign(config, myConfig);

export default config;
