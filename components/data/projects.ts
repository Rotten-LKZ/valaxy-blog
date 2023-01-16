interface Project {
  name?: string
  eng_name?: string
  desc?: string
  eng_desc?: string
  github_url?: string
  example_url?: string
  intro_url?: string
}

export default [
  {
    "name": "我的 Valaxy 博客",
    "eng_name": "My Valaxy blog",
    "desc": "我的 Valaxy 博客",
    "eng_desc": "My blog using Valaxy",
    "github_url": "https://github.com/Rotten-LKZ/valaxy-blog",
    "example_url": "https://rotcool.me"
  },
  {
    "name": "Valaxy 管理站点",
    "eng_name": "Valaxy admin",
    "desc": "Valaxy 在线管理端",
    "eng_desc": "Online admin client for Valaxy",
    "github_url": "https://github.com/Rotten-LKZ/valaxy-admin-web",
    "example_url": "https://va.rotcool.me"
  },
  {
    "name": "番剧管理器",
    "eng_name": "Bangumi Manager",
    "desc": "一个用 Tauri 制作成的管理你 ACGN 作品的项目",
    "eng_desc": "A project aims to manage your ACGN works made with Tauri.",
    "github_url": "https://github.com/Rotten-LKZ/bangumi-manager"
  },
  {
    "name": "Concisedb",
    "desc": "为 Node.js 提供的存储 JSON 文件的数据库依赖包",
    "eng_desc": "A database library stores JSON file for Node.js.",
    "github_url": "https://github.com/Rotten-LKZ/concisedb",
    "intro_url": "https://www.concisedb.top"
  },
  {
    "name": "答题卡作文图片生成器",
    "eng_name": "Article Image Generator",
    "desc": "可以生成答题卡样式的图片的生成器",
    "eng_desc": "A generator for generating answer card style images.",
    "github_url": "https://github.com/Rotten-LKZ/article-image-generator"
  },
  {
    "name": "表格生成器",
    "eng_name": "Table Generator",
    "desc": "生成表格图片的生成器（Vue.js 练手项目）",
    "eng_desc": "A generator for generating table images. (Vue.js learning project)",
    "github_url": "https://github.com/Rotten-LKZ/table-generator"
  },
  {
    "name": "班级助手",
    "eng_name": "Class Helper",
    "desc": "可以装在教师电脑帮助老师教学的工具。里面有倒计时以及刮刮乐，还有随机点名。",
    "eng_desc": "A tool helps teachers teach, which can be installed in the computer in the class. It has a countdown and a scratch card game, and a roll call.",
    "github_url": "https://github.com/Rotten-LKZ/class-helper"
  },
  {
    "name": "班级助手（C# 重制版）",
    "eng_name": "Class Helper (C#)",
    "desc": "可以装在教师电脑帮助老师教学的工具，并且用 C# 重置。里面有倒计时和随机点名。",
    "eng_desc": "A tool helps teachers teach, which can be installed in the computer in the class. It has a countdown and a roll call.",
    "github_url": "https://github.com/Rotten-LKZ/class-helper-c-sharp"
  },
] as Project[]