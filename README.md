<h3>前言</h3>

> 这是一个使用vue + koa2 + mysql 开发的全栈小程序项目

&nbsp;&nbsp;自从mpvue框架发布以来，我们可以直接基于vue开发小程序，大大降低学习，因为mpvue是基于vue开发的用于开发小程序的框架，支持大部分vue的api，方便开发者开发。

&nbsp;&nbsp;本人所在公司在2018年4月以来，我也陆续开发了两个小程序项目，对于熟悉vue开发的同学来说，能够快速上手开发，为了扩展对于小程序的学习，以及node开发，因此学习了demo

## 在安装运行之前

1. 修改 ./project.config.json 中的appid
2. 修改 ./src/config.js 中的 域名，改成自己的小程序的域名
3. 登录 [微信开发平台](https://mp.weixin.qq.com/wxopen/thirdtools?action=qcloud_tool&token=1567563364&lang=zh_CN)的设置-> 开发者工具 -> 腾讯云后台管理，根据[微信小程序开发环境管理](https://console.qcloud.com/lav2/dev)配置 ./server/config.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 相关文档

1. [小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
2. [mpvue](http://mpvue.com/)

## 目录结构

```
├─server // koa2 代码
│  │
│  ├─controllers
│  │      addbook.js // 添加图书
│  │      addcomment.js // 添加评论
│  │      bookdetail.js // 图书详情
│  │      booklist.js // 图书列表
│  │      commentlist.js // 评论列表
│  │      top.js // 浏览最多的书籍
│  │
│  ├─middlewares
│  │      response.js
│  │
│  ├─routes
│  │      index.js
│  │
│  └─tools
│          cAuth.sql
│          initdb.js
│          snail.sql
│
├─src
│  │  app.json
│  │  App.vue
│  │  config.js // 接口配置
│  │  main.js
│  │  util.js // 公共方法
│  │
│  ├─components
│  │      BookInfo.vue // 图书详情组件
│  │      Card.vue // 图书卡片组件
│  │      CommentList.vue // 评论组件
│  │      Rate.vue  // 星级组件
│  │      TopSwiper.vue // 轮播组件
│  │      YearProgress.vue // 时间年轮组件
│  │
│  └─pages
│      ├─books // 图书馆页面
│      │
│      ├─comments // 评论页面
│      │
│      ├─detail // 图书详情页面
│      │
│      └─me // 我的页面
│
└─static // 静态资源

```

# mpvue-mini-program

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
