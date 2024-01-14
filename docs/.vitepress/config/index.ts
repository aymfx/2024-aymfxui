import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin';

module.exports = {
  title: 'Aymfx UI',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aymfxhub/aymfx-ui' },
    ],

    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2023-present Chen Xing zhi',
    },

    nav: [
      { text: '指南', link: '/guide/start' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: {
      '/guide/': [
        {
          items: [{ text: '快速开始', link: '' }],
        },
      ],
      '/components/': [
        {
          text: '功能增强',
          items: [{ text: 'Button 按钮', link: '/components/button' }],
        },
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  base: '/aymfx-ui/',
  vite: {
    resolve: {
      alias: {
        'aymfx-ui': '../../../packages/components',
      },
    },
  },
};
