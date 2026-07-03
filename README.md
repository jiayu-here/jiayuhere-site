# JiaYu Here

`JiaYu Here` 是 `www.jiayuhere.com` 的个人内容网站，围绕旅行记录、日常手记和知识见解组织内容。项目采用纯静态页面实现，适合部署到 GitHub Pages、Netlify、Vercel 或任意静态托管平台。

## 项目定位

这个仓库用于维护个人网站首页与基础站点资源，目标是提供一个清晰、轻量、易部署的个人主页：

- 展示站点品牌和主要内容方向。
- 按旅行、日常、见解组织阅读入口。
- 支持移动端导航、文章筛选、滚动进度和订阅表单演示。
- 预留 SEO、Open Graph、站点地图、浏览器图标和 PWA manifest 等上线配置。

## 功能亮点

- 响应式首页布局，适配桌面端和移动端。
- 首屏封面图、阅读路线、推荐内容、分类内容和关于区域。
- JavaScript 交互包括移动菜单、导航高亮、滚动进度、文章筛选和表单提示。
- 已包含 `CNAME`，可直接绑定 `www.jiayuhere.com`。
- 包含 `robots.txt`、`sitemap.xml`、`site.webmanifest` 和 `favicon.svg`，便于正式上线。

## 文件说明

```text
index.html                 网站首页结构与页面内容
assets/styles.css          全站样式与响应式布局
assets/script.js           导航、筛选、滚动进度和表单交互
assets/images/             首页图片资源
CNAME                      GitHub Pages 自定义域名配置
robots.txt                 搜索引擎抓取配置
sitemap.xml                站点地图
site.webmanifest           浏览器安装与主题信息
favicon.svg                网站图标
```

## 本地预览

这是一个纯静态项目，可以直接打开 `index.html` 预览。也可以使用任意本地静态服务器：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署建议

1. 将仓库部署到 GitHub Pages、Netlify、Vercel 或其它静态托管平台。
2. 如果使用 GitHub Pages 并绑定域名，保留 `CNAME` 文件。
3. 在域名服务商处配置 `www.jiayuhere.com` 指向托管平台提供的地址。
4. 上线后替换真实文章链接，并接入实际邮件订阅、统计分析或评论服务。

## 后续可维护方向

- 将示例文章替换为真实内容。
- 增加独立文章页面或接入静态站点生成器。
- 补充图片压缩、访问统计和站点分析。
- 根据内容增长情况扩展标签、归档和搜索功能。
