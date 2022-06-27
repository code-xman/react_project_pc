import { defineConfig } from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const config = defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
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
