---
title: Minecraft 服务器分组配置
date: 2026-01-16T15:33:00.000Z
categories: Title-tattle
tags:
  - 中文
  - Minecraft
---

本文使用 LuckPerms + NameColor + PlaceholderAPI + Strings (Chat Plugin) + Vault 进行基本的服务器权限组配置，包括聊天中显示的前后缀（请删掉如 EssentialsX Chat 等类似聊天插件）

由于 Strings 插件不支持使用 Paper 核心的 MiniMessage API，所以本文着重以传统的颜色值或者 Hex 颜色值进行配置，当然也可以结合 [Runway]() 插件统一解析 MiniMessage 格式并调用 MiniMessage API，或者更换支持 MiniMessage API 的聊天插件（打算手搓一个，正在挖坑……）

正因如此，推荐 [RGBirdflop](https://birdflop.com/resources/rgb/) 这种网站可以根据两个颜色生成出中间的渐变色，方便复制。

首先，要下载 PlaceholderAPI 的扩展包，以支持 LuckPerms 以及 Namecolor。

```bash
/papi ecloud download LuckPerms
/papi ecloud download Player
/papi reload
```

之后，要用 LuckPerms 设置分组，添加权限组 `jianzhang`，并且设置好前缀，然后设置继承的父权限组，可以实现继承父权限组的权限配置同时单独设置 `jianzhang` 权限组的权限以及前后缀。最后保存应用到游戏里即可。（即只需要在父权限组设置好 tpa tpaccept 这些权限后子权限组会自动继承，也就是设置了一样的权限）

如果想要给特定玩家特定权限，可以模仿网页版添加的权限，添加上 `prefix.0.xxx` 权限，此时对具体用户权限优先级比权限组优先级大。

权重的意思是优先级，如果一个用户同时存在的两个权限组中的权限有冲突，权重数值更大的将会优先生效。

![Step-1](https://img.rotcool.me/i/2026/01/17/696a60f8c0f4f.png)
![Step-2](https://img.rotcool.me/i/2026/01/17/696a60f95d411.png)

然后在游戏输入以下命令即把某个玩家的权限组**设置为** `jianzhang` （注意不是添加，这里是直接设置成 `jianzhang`）：

```bash
/lp user <玩家ID> parent set jianzhang
```

同时也可以基于 Namecolor 插件设置自己名字的颜色譬如：

```bash
/gradient red orange
```

之后，打开 `/plugins/Strings/channels.yml` 找到第 17 行（若没改变配置文件情况下，即 `channels.global.format`），修改为类似这种形式：

```yaml
format: "[%luckperms_prefix%] &f%player_displayname% &7»&f {message}"
```

其中的 `%luckperms_prefix%` 就是我们刚刚在 LuckPerms 设置的前缀；`%player_displayname%` 则是 Namecolor 设置的名称颜色。可以把括号以及空格加到刚刚设置的前缀里面，这样就可以做到没有前缀的人也不会有突兀的额外的空格，并且括号也能加上渐变。

并且 Strings 支持我们用 `@XXX` 来艾特他人，具体配置在 `/plugins/Strings/config.yml` 第 145-187 行，以下是对具体配置的翻译：

```yaml
# 是否启用“提及”功能？
enable-mentions: true

# 是否启用 @everyone (艾特全体) 功能？
# 玩家仍然需要拥有权限节点 strings.mention.all 才能使用此功能。
mention-everyone: true

# 聊天框提及格式：
# 目前尚未实现，将在下个版本更新中加入。
# 同时，请使用下方“mention-color”项；该颜色将对所有玩家显示。
# 当玩家使用 @用户名 时，聊天框中的文本应该如何变化？
# 注意：这将改变所有玩家看到的这段文字。
# mention-color 选项代表被提及的玩家本人看到的样式。
mention-chat-format: '&7'

# 提及颜色：
# 这代表了被提及的玩家在自己的聊天框中看到的提及文本颜色。
mention-color: '&e'

# 提及格式：
# 这段文字将显示在被提及玩家的“动作栏”（Action Bar，准星下方的小字位置）。
# 可用变量：
# - %sender% - 谁艾特了你？
mention-format: '&e%sender% 艾特了你。'

# 提及音效：
# 播放给被提及玩家听的声音。
# 音效列表可参考：
# https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
mention-sound: BLOCK_NOTE_BLOCK_PLING

# 提及音调：
# 玩家每次被艾特时都会听到声音。
# 这里修改声音的音调。请谨慎调整此项。
# 音调选项可参考：
# https://minecraft.wiki/w/Note_Block
mention-pitch: 0.594604

# 提及音量：
# 玩家听到的音符盒声音有多大？
mention-vol: 10
```

现在人名称前面有个波浪线 ~，这个是 EssentialsX 插件影响的，配置项在 `/Essentials/config.yml` 下第 34 行，有一个 `nickname-prefix` 改为空就好了：


```yaml
nickname-prefix: ''
```

之后再重新加载 EssentialsX：
```bash
/essentials reload
```

最后效果呈现：

![最终效果](https://img.rotcool.me/i/2026/01/17/696a60f7f208a.png)
