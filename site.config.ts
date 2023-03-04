import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://rotcool.me/',
  favicon: '/favicon.ico',
  lang: 'zh-CN',
  title: '烂裤子の小站',
  subtitle: '丰富多彩的烂裤子将在此呈现',
  author: {
    name: 'LKZ烂裤子',
    email: 'Rotten_LKZ@163.com',
    avatar: 'https://img.rotcool.me/i/2022/12/27/63aaca2a50b7d.jpg',
    status: {
      emoji: '🤔',
      message: 'Think more.',
    },
  },
  description: '跌跌撞撞的人生才是人生',
  feed: {
    favicon: '/favicon.ico',
  },
  comment: {
    enable: true,
  },
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
      name: 'Netease Cloud Music',
      link: 'https://music.163.com/#/user/home?id=634683704',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
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
      name: 'Telegram',
      link: 'https://t.me/rotcool',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/2Dh6DuJeRG',
      icon: 'i-ri-discord-line',
      color: '#7289DA',
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

  sponsor: {
    enable: true,
    title: '咣咣咣（赞助）',
    methods: [
      {
        name: '支付宝',
        url: 'https://img.rotcool.me/i/2022/12/27/63aacb280a488.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://img.rotcool.me/i/2022/12/27/63aacb29b35ec.jpg',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://img.rotcool.me/i/2022/12/27/63aacb2a69419.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
