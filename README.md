## 网站性能优化项目

### Part 1: 优化 index.html 的 PageSpeed Insights 得分

- 压缩图片，减小文件大小，指定图片的宽高。
- 调整主页上 pizzeria.jpg 图片的大小。
- 对 print.css 加入媒体查询，使其不阻止渲染。
- 内联较小的 style.css 样式表文件, 减少网络的文件请求数量。
- 将 analytics.js 标记为异步执行，使其不阻止渲染。
- 将谷歌分析代码绑定到 onload 事件，使其在网页加载完成后再执行。
- 用 gulp 构建工具，压缩 .html .css .js 文件的文本大小。

### Part 2: 优化 pizza.html 的 FPS（每秒帧数）

- 将对布局触发的代码移到循环之外，避免滚动时引发强制同步布局。
- 优化大小改变后宽度的计算。


### 文件说明

- src 为源代码
- dist 为生产代码
- package.json 包含 gulp 构建的依赖项
- gulpfile.js 包含 gulp 任务配置

### 如何运行

本地用浏览器打开 dist/index.html 文件

### gulp 工具的运行

本工具依赖 npm 包管理工具。若无请点击 [node.js](https://nodejs.org/zh-cn/)

终端进入本目录

1. 若未安装 gulp: npm install gulp-cli -g
2. 加载依赖项: npm install
3. 运行任务: gulp

