---
title: Idris2 Getting Started
title_zh: Idris2 入门
date: '2022-09-11T02:14:51.990Z'
updated: '2022-09-11T22:14:02.230Z'
categories:
  - Coding
  - Programming Language
  - Idris2
tags:
  - Idris2
  - Ubuntu
  - English
  - 中文
---

::: zh-CN
## 什么是 Idris2？{lang="zh-CN"}
看官网：<https://www.idris-lang.org/>

## 安装过程 {lang="zh-CN"}

*环境为 Ubuntu 20.04（WSL2）*

### 安装 Chez Scheme {lang="zh-CN"}
```bash
sudo apt install chezscheme
```

### 下载 Idris2 {lang="zh-CN"}

链接：<https://www.idris-lang.org/pages/download.html>

可以用 `cURL` 或者 `wget` 下载上面给的最新版本，也可以用 `git clone` 把仓库下载下来以使用最新开发版。

如：
```bash
wget https://www.idris-lang.org/idris2-src/idris2-0.5.1.tgz
```

### 解压 {lang="zh-CN"}
```bash
# 改成你下载的文件名，直接 `git clone` 的话就不是压缩包了，不需要解压
tar -zxvf idris2-0.5.1.tgz
```

### 进入文件夹 {lang="zh-CN"}
```bash
cd idris2-0.5.1
```

### 安装 {lang="zh-CN"}
```bash
# 这里的 chezscheme 可能是 chez、chezscheme9.5（你下的版本号）
make bootstrap SCHEME=chezscheme
make install
```
如果在这一步发现没有 `make` 指令，请先 `sudo apt install make`；如果这一步说没有 `gmp.h` 请先 `sudo apt install libgmp3-dev`

### 环境变量 {lang="zh-CN"}
此时可执行文件已经在 `build/exec` 下面了，可以直接把这个文件夹下的一个文件和文件夹都复制到 `/bin` 下面，也可以修改环境变量

### Hello world {lang="zh-CN"}
新建文件 `hello.idr`，输入以下代码：
```
module Main

main : IO ()
main = putStrLn "Hello world"
```
然后在控制台输入 `idris2 hello.idr -o hello` 你就会在看到有 `build` 文件夹，然后 `build/exec/hello` 即是可以执行文件，直接 `./build/exec/hello` 即可执行。

更多内容就看[官方教程](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)吧！
:::

::: en
## What is Idris2? {lang="en"}
See official website: <https://www.idris-lang.org/>

## Installation {lang="en"}

*This article is under `Ubuntu 20.04 (WSL2)`*

### Install Chez Scheme {lang="en"}
```bash
sudo apt install chezscheme
```

### Download Idris2 {lang="en"}

Link: <https://www.idris-lang.org/pages/download.html>

You can use `cURL` or `wget` to download the latest version. You can also run `git clone` to clone the repo for the latest dev version.

E.g.
```bash
wget https://www.idris-lang.org/idris2-src/idris2-0.5.1.tgz
```

### Unpackaging {lang="en"}
```bash
# Change filename to yours. If you run `git clone`, you don't need to unpackage
tar -zxvf idris2-0.5.1.tgz
```

### Enter folder {lang="en"}
```bash
cd idris2-0.5.1
```

### Installation {lang="en"}
```bash
# chezscheme here maybe chez, chezscheme9.5 (depending on the version)
make bootstrap SCHEME=chezscheme
make install
```
If you don't have `make` command, run `sudo apt install make` first. If it cannot find `gmp.h`, run `sudo apt install libgmp3-dev`.

### Environment variable {lang="en"}
Now the executable file is uder `build/exec`. You can copy the file and folder under this folder to `/bin`. You can also modify your environment variables.

### Hello world {lang="en"}
Create a new file named `hello.idr`, enter the following code:
```
module Main

main : IO ()
main = putStrLn "Hello world"
```
Then run `idris2 hello.idr -o hello` and you will see folder `build`. Then the file `build/exec/hello` is executable file. Just run `./build/exec/hello` and you can see the result of the code. 

For more contents, read [official course](https://idris2.readthedocs.io/en/latest/tutorial/starting.html)!
:::