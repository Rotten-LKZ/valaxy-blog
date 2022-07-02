import type { UserConfig } from 'valaxy'
import type { ThemeUserConfig } from 'valaxy-theme-yun'

/**
 * User Config
 * do not use export const
 */
const config: UserConfig<ThemeUserConfig> = {
  lang: 'zh-CN',
  title: '烂裤子の小站',
  subtitle: '丰富多彩的烂裤子将在此呈现',
  url: 'https://rotcool.me/',
  author: {
    name: 'LKZ烂裤子',
    email: 'Rotten_LKZ@163.com',
    avatar: 'https://cdn.rotcool.me/2022/07/02/avatar.jpg',
    status: {
      emoji: '🤔',
      message: 'Think more.',
    },
  },
  description: '跌跌撞撞的人生才是人生',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ Group 836523771',
      link: 'https://jq.qq.com/?_wv=1027&k=Pkhj5yxn',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Rotten-LKZ',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Weibo',
      link: 'https://weibo.com/rottenlkz',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: 'BiliBili',
      link: 'https://space.bilibili.com/290238250',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/LKZRotCool',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'E-Mail',
      link: 'mailto:Rotten_LKZ@163.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '烂裤子の小站',
    },

    bg_image: {
      enable: true,
      url: 'https://cdn.rotcool.me/2022/07/02/isla-blur-40p.jpg',
      dark: 'https://cdn.rotcool.me/2022/07/02/charlotte-night.jpg',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2022,
      beian: {
        enable: false,
      },
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },
  sponsor: {
    enable: true,
    title: '咣咣咣（赞助）',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.rotcool.me/2022/07/02/d-alipay.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.rotcool.me/2022/07/02/d-qq.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.rotcool.me/2022/07/02/d-wepay.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ]
  }
}

/**
 * add your icon to safelist
 * if your theme is not yun, so you can add it by yourself
 */
config.themeConfig?.pages?.forEach((item) => {
  config.unocss?.safelist?.push(item?.icon)
})

export default config
