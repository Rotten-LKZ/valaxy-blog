---
title: 视频服务器折腾历程
date: '2022-09-13T13:43:58.266Z'
updated: '2022-09-13T16:50:49.404Z'
categories:
  - Life
  - Mess Around
tags:
  - 中文
  - Ubuntu
  - Cloudreve
  - PotPlayer
---

## 背景

家里闲置着一台十几二十年前的可能比我年纪还大的电脑，我总是想着这台电脑能干什么。

想着想着，我就想到了折腾一个音视频服务器。这部电脑不支持硬件解码但是我想总是可以不用硬件解码的。于是我就尝试安装了 [Emby](https://emby.media/)。本来挂削啥的好好的，但是用到 Windows 桌面客户端的时候直接给我整傻了，好像说没有 `Emby Premiere` 就不能用啥的，总之就好感极降。于是就放弃了 [Emby](https://emby.media/)。然后这台电脑又闲置了好久。

到了今天，经过我在网上一番激烈的讨论下来，尽可能减少折腾的想法，打算搭载一个有 `WebDAV` 功能的个人网盘，因为已经装载了 `Ubuntu Server` 的系统了，所以搭起来不要太容易。之后再用 `PotPlayer` 和手机上的 `MX Player` 就可以播放视频了，接下来是折腾的教程。

## 服务端配置

### 安装 Ubuntu Server

网上一大堆教程看看就好了。

### 安装 Cloudreve

首先找到最新版本，复制下载地址并下载：<https://github.com/cloudreve/Cloudreve/releases>

*写教程的时候最新版是 3.5.3，改成自己下载时最新版的地址以及对应系统版本的地址即可*
```bash
wget https://github.com/cloudreve/Cloudreve/releases/download/3.5.3/cloudreve_3.5.3_linux_amd64.tar.gz

# or
# curl -O 
# https://github.com/cloudreve/Cloudreve/releases/download/3.5.3/cloudreve_3.5.3_linux_amd64.tar.gz

tar -zxvf cloudreve_3.5.3_linux_amd64.tar.gz
```

> 如果你的 Ubuntu Server 不方便装代理而速度不快，可以直接用你使用的电脑下载完成解压之后再用 [WinSCP](https://winscp.net/eng/index.php) 传过去，方便很多 *（对于我这个 Linux 白痴来说）*

正常下载解压之后会有名为 `cloudreve` 的可执行文件文件，进入文件所在的文件夹，之后授予权限先运行一下：

```bash
chmod +x ./cloudreve
./cloudreve
```

它应该会有以下输出：

```

   ___ _                 _
  / __\ | ___  _   _  __| |_ __ _____   _____
 / /  | |/ _ \| | | |/ _  | '__/ _ \ \ / / _ \
/ /___| | (_) | |_| | (_| | | |  __/\ V /  __/
\____/|_|\___/ \__,_|\__,_|_|  \___| \_/ \___|

   V3.5.3  Commit #0e5683b  Pro=false
================================================

[Info]    2022-09-13 22:02:21 初始化数据库连接
[Info]    2022-09-13 22:02:21 开始进行数据库初始化...
[Info]    2022-09-13 22:02:22 初始管理员账号：admin@cloudreve.org
[Info]    2022-09-13 22:02:22 初始管理员密码：初始密码
[Info]    2022-09-13 22:02:23 开始执行数据库脚本 [UpgradeTo3.4.0]
[Info]    2022-09-13 22:02:23 数据库初始化结束
[Info]    2022-09-13 22:02:23 初始化任务队列，WorkerNum = 10
[Info]    2022-09-13 22:02:23 初始化定时任务...
[Info]    2022-09-13 22:02:23 当前运行模式：Master
[Info]    2022-09-13 22:02:23 开始监听 :5212
```

然后浏览器打开 `http://你的服务器 IP:5212` 用初始账号密码登入之后先修改这个用户的账号密码
![主页截图](https://img.rotcool.me/i/2023/01/16/63c4b26ddb8d2.png)
![设置-用户页截图](https://img.rotcool.me/i/2023/01/16/63c4b26e5d4bf.png)
![用户设置截图](https://img.rotcool.me/i/2023/01/16/63c4b26e93e92.png)
修改完后在控制台 `Ctrl + C` 结束进程

### 配置 Cloudreve service

编辑 `/etc/systemd/system/cloud.service` 文件（没有新建）：

```ini
[Unit]
Description=Start Cloudreve service

[Service]
Type=simple
ExecStart=/path/to/cloudreve

[Install]
WantedBy=multi-user.target
```

别忘了修改 `ExecStart` 的路径。

> 有关 `Systemd` 相关配置教程欢迎看：<http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-part-two.html>

### 启动 Cloudreve service

1. 重新加载服务配置文件

```bash
systemctl daemon-reload
```

2. 设置开启自启动

```bash
systemctl enable cloud.service
```

3. 启动服务

```bash
systemctl start cloud.service
```

4. 查看服务状态

```bash
systemctl status cloud.service
```

如果看到的有绿色的 `active (running)` 字样说明服务配置并启动成功了，按 `q` 键就可以退出。

此时再次打开浏览器访问 `http://你的服务器 IP:5212` 应该就能正常访问了。

### WebDAV

回到主页，左侧有个 WebDAV，点击后选择新建，写个名字就创建成功了。

## 客户端配置

### PotPlayer

![PotPlayer 设置截图](https://img.rotcool.me/i/2023/01/16/63c4b293d79c8.png)

打开 PotPlayer，点击上面的加号之后根据提示填，这里是英文版的，中文版对应也差不多，然后点击 OK 就可以了。

### MX Player

*To be continued*

## 总结

生命的意义在于折腾！趁年轻多折腾吧！！！