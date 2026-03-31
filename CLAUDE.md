# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Terminal 百科 — 一站式终端工具导航网站，中文内容为主。涵盖终端模拟器、Shell、配置、主题、CLI 工具、编程字体 6 个分类，共 120+ 条目。

线上地址：https://voidpion.github.io/terminals/

## Commands

```bash
npm run dev       # 开发服务器 (localhost:4321)
npm run build     # 生产构建 (输出到 dist/)
npm run preview   # 预览构建结果
```

需要 Node.js >= 22.12.0（Astro 6 要求）。

## Architecture

**Tech stack**: Astro 6 + Tailwind CSS v4 + MDX，部署在 GitHub Pages（base path `/terminals`）。

**Content Collections**（`src/content.config.ts`）：6 个 collection 共享 `baseFields`（title, description, tags, featured, recommended, order 等），各自扩展专属字段（如 emulators 有 platforms/pricing，tools 有 category/replaces）。每个 collection 使用 `glob` loader 加载对应 `src/content/<name>/` 目录下的 `.mdx` 文件。

**Key files**:
- `src/content.config.ts` — Zod schema 定义，所有 collection 的字段约束
- `src/lib/utils.ts` — `url()` 函数，为所有内部链接添加 base path 前缀（GitHub Pages 必须）
- `src/lib/collections.ts` — collection 元数据（中文名、描述）和跨 collection 查询函数
- `src/layouts/EntryLayout.astro` — 条目详情页布局（面包屑、推荐标记、截图、目录）
- `src/components/ToolCard.astro` — 列表卡片组件（含推荐角标）

**Routing**（`src/pages/`）：
- `[collection]/index.astro` — 各分类列表页，排序逻辑：recommended 优先，再按 order
- `[collection]/[...slug].astro` — 动态详情页路由
- `tags/[tag].astro` — 跨 collection 标签聚合页

**Base path rule**: 所有内部链接和图片 src 必须通过 `url()` 包裹，否则在 GitHub Pages 上会 404。

**Styling**: Tailwind CSS v4 + `@tailwindcss/typography`，Tokyo Night 暗色主题。颜色定义在 `src/styles/global.css`，使用 CSS 变量（`--terminal-*`）。

**Deployment**: 推送 `main` 分支触发 GitHub Actions（`.github/workflows/deploy.yml`），自动构建部署到 GitHub Pages。

## Content conventions

- MDX frontmatter 格式参见 `src/content.config.ts` 中各 collection 的 schema
- `recommended: true` 的条目在列表页排在最前，卡片右上角和详情页标题旁显示绿色"推荐"角标
- `featured: true` 的条目会出现在首页精选区域
- 截图放在 `public/screenshots/`，建议 JPEG 格式（1200px 宽，quality 80）
- `order` 数值越小排名越靠前（在同 recommended 级别内）
- tools 的 `category` 字段必须是枚举值之一：search, file_manager, viewer, multiplexer, git, system, network, productivity, other
