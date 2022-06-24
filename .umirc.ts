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
        { path: '/home', component: '@/pages/pageList/home.jsx' },
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
          path: '/react-hooks/forwardRef',
          component: '@/pages/pageList/react-hooks/forwardRef',
        },
        {
          path: '/react-hooks/useImperativeHandle',
          component: '@/pages/pageList/react-hooks/useImperativeHandle',
        },
        {
          path: '/form-demo/form-custom',
          component: '@/pages/pageList/form-demo/form-custom',
        },
        {
          path: '/form-demo/form-1',
          component: '@/pages/pageList/form-demo/form-1',
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
        {
          path: '/Dnd',
          component: '@/pages/pageList/dnd',
          routes: [{ path: '/index', component: 'index' }],
        },
        {
          path: '/func/lodash/throttle',
          component: '@/pages/pageList/func/lodash/throttle',
          routes: [{ path: '/index', component: 'index' }],
        },
        {
          path: '/func/lodash/debounce',
          component: '@/pages/pageList/func/lodash/debounce',
          routes: [{ path: '/index', component: 'index' }],
        },
        {
          path: '/iframe-page/iframe1',
          component: '@/pages/pageList/iframe-page/iframe1',
        },
        {
          path: '/iframe-page/iframe2',
          component: '@/pages/pageList/iframe-page/iframe2',
        },
        {
          path: '/ts/ts-test1',
          component: '@/pages/pageList/ts/ts-test1',
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
