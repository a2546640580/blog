import{_ as a,r as l,o as r,c as v,a as e,b as n,d as s,e as d}from"./app-9f26182c.js";const t={},c=d(`<h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><h3 id="创建目录并初始化" tabindex="-1"><a class="header-anchor" href="#创建目录并初始化" aria-hidden="true">#</a> 创建目录并初始化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir blog

cd blog

npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加script" tabindex="-1"><a class="header-anchor" href="#添加script" aria-hidden="true">#</a> 添加script</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
  &quot;docs:build&quot;: &quot;vuepress build docs&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装主题" tabindex="-1"><a class="header-anchor" href="#安装主题" aria-hidden="true">#</a> 安装主题</h3>`,6),u={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html",target:"_blank",rel:"noopener noreferrer"},o=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vuepress-theme-reco --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装必备插件" tabindex="-1"><a class="header-anchor" href="#安装必备插件" aria-hidden="true">#</a> 安装必备插件</h3>`,2),m={href:"https://github.com/viko16/vuepress-plugin-permalink-pinyin",target:"_blank",rel:"noopener noreferrer"},b=d(`<p>虽然可以通过该插件转换中文路径，但还是建议尽量使用英文命名目录和文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i vuepress-plugin-permalink-pinyin --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="搭建基础目录结构" tabindex="-1"><a class="header-anchor" href="#搭建基础目录结构" aria-hidden="true">#</a> 搭建基础目录结构</h2>`,3),h={href:"https://www.vuepress.cn/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"},p=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs
│   ├── .vuepress
│   │   ├── public
│   │   │   │── avatar.png(头像)
│   │   │   └── bg.png(首页背景图)
│   │   └── config.js(博客配置)
│   ├── views
│   │   └── 美食/2023/烤鸭.md(测试文章)
│   └── README.md(首页配置)
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完善基础配置" tabindex="-1"><a class="header-anchor" href="#完善基础配置" aria-hidden="true">#</a> 完善基础配置</h2>`,2),g=e("br",null,null,-1),x={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/",target:"_blank",rel:"noopener noreferrer"},_=d(`<h3 id="docs-vuepress-config-js" tabindex="-1"><a class="header-anchor" href="#docs-vuepress-config-js" aria-hidden="true">#</a> docs/.vuepress/config.js</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  theme: &#39;reco&#39;,
  title: &#39;我的美食分享博客&#39;,
  description: &#39;欢迎来到我的美食分享博客&#39;,
  // 移动端优化
  head: [[&#39;meta&#39;, { name: &#39;viewport&#39;, content: &#39;width=device-width,initial-scale=1,user-scalable=no&#39; }]],
  // 主题设置
  themeConfig: {
    type: &#39;blog&#39;,
    author: &#39;myname&#39;,
    // 显示在个人信息的头像
    authorAvatar: &#39;/avatar.png&#39;,
    // 导航栏左侧logo
    logo: &#39;/avatar.png&#39;,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航及其深度
    subSidebar: &#39;auto&#39;,
    sidebarDepth: 1,
    // 最后更新时间
    lastUpdated: &#39;Last Updated&#39;,
    // 项目开始时间
    startYear: &#39;2023&#39;,
    // 导航栏配置
    nav: [
      { text: &#39;主页&#39;, link: &#39;/&#39;, icon: &#39;reco-home&#39; },
      { text: &#39;时间线&#39;, link: &#39;/timeline/&#39;, icon: &#39;reco-date&#39; },
      { text: &#39;仓库地址&#39;, link: &#39;https://github.com/smallsunnyfox/vuepress-theme-reco-starter&#39;, icon: &#39;reco-github&#39; }
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: &#39;分类&#39; // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: &#39;标签&#39; // 默认文案 “标签”
      }
    },
    // 友情链接
    friendLink: [
      {
        title: &#39;午后南杂&#39;,
        desc: &#39;Enjoy when you can, and endure when you must.&#39;,
        logo: &#39;https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png&#39;,
        link: &#39;https://www.recoluan.com&#39;
      },
      {
        title: &#39;vuepress-theme-reco&#39;,
        desc: &#39;A simple and beautiful vuepress Blog &amp; Doc theme.&#39;,
        logo: &#39;https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png&#39;,
        link: &#39;https://vuepress-theme-reco.recoluan.com&#39;
      }
    ]
  },
  // 插件配置
  plugins: [
    [
      &#39;permalink-pinyin&#39;,
      {
        lowercase: true,
        separator: &#39;-&#39;
      }
    ]
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docs-readme-md" tabindex="-1"><a class="header-anchor" href="#docs-readme-md" aria-hidden="true">#</a> docs/README.md</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
home: true
bgImage: &#39;/bg.png&#39;
bgImageStyle: {
  height: &#39;480px&#39;,
  color: &#39;white&#39;
}
---
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="起锅烧油" tabindex="-1"><a class="header-anchor" href="#起锅烧油" aria-hidden="true">#</a> 起锅烧油</h2><p>写文章时需要在FrontMatter中补充文章信息</p>`,6),f={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),w={href:"https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html",target:"_blank",rel:"noopener noreferrer"},E=d(`<h3 id="docs-views-美食-2023-烤鸭-md" tabindex="-1"><a class="header-anchor" href="#docs-views-美食-2023-烤鸭-md" aria-hidden="true">#</a> docs/views/美食/2023/烤鸭.md</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: 烤鸭的做法
date: 2023-05-29 22:00:00
sidebar: auto
tags:
 - 烤鸭
 - 美食
categories:
 - 美食
---

Hello 烤鸭

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端盘上菜" tabindex="-1"><a class="header-anchor" href="#端盘上菜" aria-hidden="true">#</a> 端盘上菜</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run dev

&amp;&amp;

npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(q,A){const i=l("ExternalLinkIcon");return r(),v("div",null,[c,e("p",null,[e("a",u,[n("vuepress-theme-reco"),s(i)])]),o,e("p",null,[e("a",m,[n("一个将中文标题转换为音译permalink的VuePress插件"),s(i)])]),b,e("p",null,[e("a",h,[n("Vuepress中文网-指南-目录结构"),s(i)])]),p,e("p",null,[n("此处仅包含一些常用的基础配置"),g,n(" 详细配置和进阶功能请参考"),e("a",x,[n("主题文档"),s(i)])]),_,e("p",null,[e("a",f,[n("分类和标签"),s(i)]),k,e("a",w,[n("完整的FrontMatter"),s(i)])]),E])}const j=a(t,[["render",y],["__file","theme-reco.html.vue"]]);export{j as default};
