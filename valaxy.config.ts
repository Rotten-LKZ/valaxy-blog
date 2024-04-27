import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
  'i-ri-links-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '烂裤子の小站',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links',
        icon: 'i-ri-links-line',
        color: 'dodgerblue',
      },
      {
        name: '我的小账单',
        url: '/bill',
        icon: 'i-ri-money-cny-circle-line',
        color: '#FFD700',
      },
      {
        name: '我的小项目',
        url: '/projects',
        icon: 'i-ri-open-source-line',
        color: '#3BC9DB',
      },
    ],

    footer: {
      since: 2022,
      // @ts-ignore
      icon: {
        name: '',
      },
    },

    bg_image: {
      enable: true,
      url: 'https://img.rotcool.me/i/2022/12/27/63aacb2de2aa5.jpg',
      dark: 'https://img.rotcool.me/i/2022/12/27/63aacb32b091a.jpg',
    },
  },

  unocss: { safelist },

  addons: [
    addonWaline({
      serverURL: 'https://waline.rotcool.me',
    }),
  ],
})
