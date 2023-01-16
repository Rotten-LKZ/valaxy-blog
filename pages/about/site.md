---
title: 关于站点
---

## 由来 {lang="zh-CN"}
## Origin {lang="en"}

:::zh-CN
实际上我以前搭建过一个博客，用的是 WordPress 动态博客，但是其实一直没怎么使用以及关照。然后在一番机缘巧合之下，我认识了 [Hexo](https://hexo.io/) 这类静态博客。还有幸遇到了 [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) 这个主题，认识到了 [YunYouJun(云游君)](https://github.com/YunYouJun)。之后他也开发了一套静态博客框架 [Valaxy](https://github.com/YunYouJun/valaxy)，使用了比较现代化的技术比如 [Vue3](https://vuejs.org/)。因为新技术的加持，[Valaxy](https://github.com/YunYouJun/valaxy) 在各个方面都很快，我也尝试使用，充当小白鼠。（真的是小白鼠。首先我一直在催更，其次我第一次实际搭建的时候甚至自己改了下源代码，之后 `build` 出来替换 `node_modeuls/valaxy` 下面的 `dist` 文件，希望 [YunYouJun(云游君)](https://github.com/YunYouJun) 可以早点修复好 bugssssss! ）
:::

:::en
In fact, I have built a blog before with a dynamic blog framework WordPress, but I haven't used and cared about it. Then I met this kind of static blog [Hexo](https://hexo.io/) by chance. Fortunately, I knew the theme [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) and made me know about [YunYouJun](https://github.com/YunYouJun). Later, he started developing a static blog framework [Valaxy](https://github.com/YunYouJun/valaxy), using relatively modern technologies such as [Vue3](https://vuejs.org/). Because of the blessing of new technology, [Valaxy](https://github.com/YunYouJun/valaxy) can bring me a extremely good experience of blog making. So I tried using. ([Valaxy](https://github.com/YunYouJun/valaxy) has a lot of bugs, however. The first time I even changed the original code and I really hope [YunYouJun](https://github.com/YunYouJun) can fix bugssssss asap!)
:::

## 个人配置 {lang="zh-CN"}
## Personal Configuration  {lang="en"}

:::zh-CN
由于 [YunYouJun(云游君)](https://github.com/YunYouJun) 比较忙 *（咕？）* ，~~一直没有推出 `create-valaxy-theme` 以便开发者创建自己的主题~~ *(现已推出)*，所以我就先用上 `valaxy-theme-yun` 这个主题。样式跟 [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun) 几乎保持一致。

除了基础的个人配置，我还更改了背景图片：

<details>
  <summary>亮色：</summary>
  <img src="https://img.rotcool.me/i/2022/12/27/63aacb2de2aa5.jpg" alt="亮色背景图">
</details>

<details>
  <summary>暗色：</summary>
  <img src="https://img.rotcool.me/i/2022/12/27/63aacb32b091a.jpg" alt="暗色背景图">
</details>

<details>
  <summary>落选的暗色：</summary>
  <img src="https://img.rotcool.me/i/2022/12/27/63aacb32b067f.jpg" alt="落选的暗色背景图">
</details>

~~然后自己还写了一个后台管理静态博客（其实用上了数据库，不知道还能不能算是静态博客），所以现在写博客体验就很爽啦！！！以后会专门写文章介绍一下我这个后台管理的具体实现以及功能使用。~~ *(有时间再弄吧)*
:::

:::en
Because [YunYouJun](https://github.com/YunYouJun) is very busy, ~~'create-valaxy-theme' has not been developed for developers to create their own theme~~ *(now available)*, So I'm using the theme `valaxy-theme-yun` at first. The styles of the theme is almost the same as [hexo-theme-yun](https://github.com/YunYouJun/hexo-theme-yun).

Except for basic configurations, I also changed the background images:

<details>
  <summary>Light mode:</summary>
  <img src="https://img.rotcool.me/i/2022/12/27/63aacb2de2aa5.jpg" alt="亮色背景图">
</details>

<details>
  <summary>Dark mode:</summary>
  <img src="https://img.rotcool.me/i/2022/12/27/63aacb32b091a.jpg" alt="暗色背景图">
</details>

<details>
  <summary>Rejected dark mode:</summary>
  <img src="https://img.rotcool.me/i/2022/12/27/63aacb32b067f.jpg" alt="落选的暗色背景图">
</details>

:::

## 样式测试 {lang="zh-CN"}
## Style Test {lang="en"}

### KaTeX

:::zh-CN
对于一元二次方程 $ax^2 + bx + c = 0 (a \neq 0)$，它的求根公式为：
:::

:::en
For a quadratic equation of one unknown $ax^2 + bx + c = 0 (a \neq 0)$, its quadratic formula is:
:::

$x_1,x_2=\frac{-b\pm\sqrt{(b^2-4ac)}}{2a}$

:::zh-CN
*当然，也可以排版小学数学题：*
:::

:::en
*Of course, you can also typeset primary school math questions:*
:::

$$
\begin{align*}
3\times4 + 7\times4 &= (3+4)\times4\\
  &=7\times4\\
  &=40
\end{align*}
$$

### 标题 {lang="zh-CN"}
#### 四级标题 {lang="zh-CN"}
##### 五级标题 {lang="zh-CN"}
### Title {lang="en"}
#### Fourth Level Title {lang="en"}
##### Fifth Level Title {lang="en"}

::: zh-CN
*斜体* **粗体** <u>下划线</u> ~~删除线~~

1. 有序
2. 列表

- 无序
- 列表

```javascript
console.log("代码块") //;
```

> 引用
>
> 多一点行

[链接](https://rotcool.me/about/site)

| 表格 | $\bar{a}$ | $\acute{a}$ | $\check{a}$ | $\grave{a}$ |
| :-: | :- | -: | - | - |
| null | 左 | 右 | abracadabra | For Test |
| undefined | 左 | 右 | content | UseLess |

图片

![图片示例](https://img.rotcool.me/i/2022/12/27/63aacb2cb1dd9.png)
:::

:::en
*Italic* **Bold** <u>Underline</u> ~~Strikethrough~~

1. Ordered
2. List

- Unordered
- List

```javascript
console.log("Code block") //;
```

> Quote
>
> More than one line

[Link](https://rotcool.me/about/site)

| Table | $\bar{a}$ | $\acute{a}$ | $\check{a}$ | $\grave{a}$ |
| :-: | :- | -: | - | - |
| null | Left | Right | abracadabra | For Test |
| undefined | Left | Right | content | UseLess |

Image

![Image Example](https://img.rotcool.me/i/2022/12/27/63aacb2cb1dd9.png)
:::
