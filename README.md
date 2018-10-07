<h3>前言</h3>

> 这是一个使用vue + koa2 + mysql 开发的全栈小程序项目

&nbsp;&nbsp;自从mpvue框架发布以来，我们可以直接基于vue开发小程序，大大降低学习，因为mpvue是基于vue开发的用于开发小程序的框架，支持大部分vue的api，方便开发者开发。

&nbsp;&nbsp;本人所在公司在2018年4月以来，我也陆续开发了两个小程序项目，对于熟悉vue开发的同学来说，能够快速上手开发，为了扩展对于小程序的学习，以及node开发，因此学习了demo

## 相关文档

[小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
[mpvue](http://mpvue.com/)

## 目录结构

```
├─server
│  │
│  ├─controllers
│  │      addbook.js
│  │      addcomment.js
│  │      bookdetail.js
│  │      booklist.js
│  │      commentlist.js
│  │      demo.js
│  │      index.js
│  │      login.js
│  │      message.js
│  │      top.js
│  │      tunnel.js
│  │      upload.js
│  │      user.js
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
│  │  config.js
│  │  main.js
│  │  util.js
│  │
│  ├─components
│  │      BookInfo.vue
│  │      Card.vue
│  │      CommentList.vue
│  │      Rate.vue
│  │      TopSwiper.vue
│  │      YearProgress.vue
│  │
│  └─pages
│      ├─books
│      │      Books.vue
│      │      main.js
│      │      main.json
│      │
│      ├─comments
│      │      Comments.vue
│      │      main.js
│      │      main.json
│      │
│      ├─detail
│      │      Detail.vue
│      │      main.js
│      │
│      └─me
│              main.js
│              Me.vue
│
└─static

```


# mpvue-mini-program

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
