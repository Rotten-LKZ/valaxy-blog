---
title: 关于此博客
date: 2022-07-02 17:41:49
categories: 杂谈
cover: https://cdn.rotcool.me/2022/07/02/vanishing-figure.png
tags:
  - 杂谈
  - Blog
  - Valaxy
  - YunYouJun
top: 1
---

## 由来

实际上我以前搭建过一个博客，用的是 WordPress 动态博客，但是其实一直没怎么使用以及关照。然后在一番机缘巧合之下，我认识了 [Hexo](https://hexo.io/) 这类静态博客。还有幸遇到了 [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) 这个主题，认识到了 [YunYouJun(云游君)](https://github.com/YunYouJun)。之后他在 [Hexo](https://hexo.io/) 基础上，使用了比较现代化的技术比如 [Vue3](https://vuejs.org/)，搭建了新的静态博客项目 [Valaxy](https://github.com/YunYouJun/valaxy)。因为新技术的加持，[Valaxy](https://github.com/YunYouJun/valaxy) 在各个方面都很快，我也尝试使用，充当小白鼠。（真的是小白鼠。首先我一直在催更，其次我今天实际搭建的时候甚至自己改了下源代码，之后 `build` 出来替换 `node_modeuls/valaxy` 下面的 `dist` 文件，希望 [YunYouJun(云游君)](https://github.com/YunYouJun) 可以早点修复好 bugssssss! ）

## 个人配置

由于 [YunYouJun(云游君)](https://github.com/YunYouJun) 比较忙*（咕？）*，一直没有推出 `create-valaxy-theme` 以便开发者创建自己的主题，所以我就先用上 `valaxy-theme-yun` 这个主题。样式跟 [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) 几乎保持一样。

除了基础的个人配置，我还更改了背景图片：

<details>
  <summary>亮色：</summary>
  <img src="https://cdn.rotcool.me/2022/07/02/isla-blur-40p.jpg" alt="亮色背景图">
</details>

<details>
  <summary>暗色：</summary>
  <img src="https://cdn.rotcool.me/2022/07/02/charlotte-night.jpg" alt="暗色背景图">
</details>

<details>
  <summary>落选的暗色：</summary>
  <img src="https://cdn.rotcool.me/2022/07/02/starry-2.jpg" alt="落选的暗色背景图">
</details>

然后自己还写了一个后台管理静态博客（其实用上了数据库，不知道还能不能算是静态博客），所以现在写博客体验就很爽啦！！！以后会专门写文章介绍一下我这个后台管理的具体实现以及功能使用。

以上，希望你在我博客中逛得愉快！*（只不过我挺水的）*

## 样式测试

### KaTeX

对于一元二次方程 $ax^2 + bx + c = 0 (a \neq 0)$，它的求根公式为：

$x_1,x_2=\frac{-b\pm\sqrt{(b^2-4ac)}}{2a}$

*当然，也可以排版小学数学题：*

$$
\begin{align*}
3\times4 + 7\times4 &= (3+4)\times4\\
  &=7\times4\\
  &=40
\end{align*}
$$

### 标题
#### 四级标题
##### 五级标题

*斜体* **粗体** <u>下划线</u> ~删除线~

1. 有序
2. 列表

- 无序
- 列表

```javascript
console.log("代码块") //;
```

> 引用
> 多一点行

[链接](https://rotcool.me/posts/about-this-blog)

| 表格 | $\bar{a}$ | $\acute{a}$ | $\check{a}$ | $\grave{a}$ |
| :-: | :- | -: | - | - |
| null | 左 | 右 | abracadabra | For Test |
| undefined | 左 | 右 | content | UseLess |

图片

![图片示例](https://cdn.rotcool.me/2022/07/02/starry-2.jpg)