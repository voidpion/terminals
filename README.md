# Terminal 百科

一站式终端工具导航网站，涵盖终端模拟器、Shell、经典配置、主题美化、CLI 工具和编程字体。

**在线访问：** https://voidpion.github.io/terminals/

## 收录内容

| 分类 | 数量 | 示例 |
|------|------|------|
| 终端模拟器 | 18 | iTerm2, Alacritty, Kitty, WezTerm, Warp, Ghostty |
| Shell | 17 | Bash, Zsh, Fish, Nushell, Elvish, PowerShell |
| 经典配置 | 16 | .zshrc, tmux.conf, init.lua, starship.toml, .vimrc |
| 主题/框架 | 38 | Tokyo Night, Catppuccin, Dracula, Oh My Zsh, Starship |
| CLI 工具 | 28 | fzf, ripgrep, bat, fd, jq, yazi, lazygit, zellij |
| 编程字体 | 10 | JetBrains Mono, Fira Code, Cascadia Code, Iosevka |

## 技术栈

- [Astro 6](https://astro.build/) — 静态站点生成
- [Tailwind CSS v4](https://tailwindcss.com/) — 样式系统
- [MDX](https://mdxjs.com/) — 内容驱动
- Tokyo Night 配色 — 默认暗色主题
- GitHub Pages — 自动部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

开发服务器默认运行在 http://localhost:4321

## 项目结构

```
src/
├── components/        # 通用组件（Header, ToolCard, TagList 等）
├── content/           # MDX 内容文件
│   ├── emulators/     # 终端模拟器
│   ├── shells/        # Shell
│   ├── configs/       # 经典配置
│   ├── themes/        # 主题/框架
│   ├── tools/         # CLI 工具
│   └── fonts/         # 编程字体
├── layouts/           # 页面布局
├── lib/               # 工具函数
├── pages/             # 路由页面
└── styles/            # 全局样式
public/
└── screenshots/       # 终端截图
```

## 添加新条目

在对应的 `src/content/<分类>/` 目录下创建 `.mdx` 文件，参考同目录已有文件的 frontmatter 格式。

以工具为例，创建 `src/content/tools/my-tool.mdx`：

```mdx
---
title: "my-tool"
description: "工具的中文描述"
github: "https://github.com/author/my-tool"
tags: ["标签1", "标签2"]
featured: false
order: 99
category: "productivity"
replaces: "被替代的工具"
install_cmd: "brew install my-tool"
written_in: "Rust"
---

## 简介

工具介绍...

## 安装

安装说明...
```

保存后开发服务器会自动刷新，推送到 `main` 分支后 GitHub Actions 自动部署。

## 部署

推送到 `main` 分支会自动触发 GitHub Actions 构建并部署到 GitHub Pages。

手动部署：

```bash
npm run build
```

构建产物在 `dist/` 目录。

## License

MIT
