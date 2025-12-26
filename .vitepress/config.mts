import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "考研免费网",
  description: "...",

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }], // 安卓顶栏颜色
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }], // 苹果全屏
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '考研英语', link: '/english' }, // 对应 english.md
      { text: '考研数学', link: '/math' },    // 对应 math.md
      { text: '考研政治', link: '/politics' }, // 对应 politics.md
      { text: '考研专业课', link: '/major' }, // 对应 major.md
    ],  

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
