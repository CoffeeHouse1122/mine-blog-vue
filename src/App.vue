<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* 内外边距通常让各个浏览器样式的表现位置不同 */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

input,
select,
textarea {
  font-size: 100%;
}

input {
  outline: none;
  border-style: none;
}

/* 去掉各 Table  cell 的边距并让其边重合 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 去除默认边框 */
fieldset,
img {
  border: 0;
}

/* 去掉 firefox 下此元素的边框 */
abbr,
acronym {
  border: 0;
  font-variant: normal;
}

/* 一致的 del 样式 */
del {
  text-decoration: line-through;
}

address,
caption,
cite,
code,
dfn,
em,
th,
var {
  font-style: normal;
  font-weight: 500;
}

/* 去掉列表前的标识, li 会继承 */
ol,
ul {
  list-style: none;
}

/* 对齐是排版最重要的因素, 别让什么都居中 */
caption,
th {
  text-align: left;
}

a {
  text-decoration: none;
}

a:hover,:active {
  text-decoration: none;
}

/*清除浮动代码*/
.clearfloat:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}

.clearfloat {
  zoom: 1;
}

/* .topLine {
  background: #000;
  height: 3px;
} */

/* 适配不同窗口 */
@media screen and (max-width: 750px) {
  .header {
    width: 100%;
  }
  .main {
    width: 100%;
  }
}
@media screen and (max-width: 1050px) {
  .header {
    width: 100%;
  }
  .main {
    width: 100%;
  }
}
@media screen and (min-width: 1050px) {
  .header {
    width: 1050px;
  }
  .main {
    width: 1050px;
  }
}

html,body {
  width: 100%;
}
#app {
  width: 100%;
}

/* 背景图 */
body {
  /* background: url("./assets/img/bodybg.jpg") no-repeat; */
  background: url('./assets/img/多彩banner.png') no-repeat;
  background-attachment: fixed;   /* 背景图位置固定 */
  background-size: contain;
  background-color: #f903;
  font-family: "Microsoft YaHei", "微软雅黑", "Trebuchet MS", Arial, Verdana, Tahoma, sans-serif;
  /* background-position: center; */
}

/* 代码高亮-start */
.hljs {
    text-align: left;
    border-radius: 5px;
    position: relative;
    border: 5px solid #926262;
    box-shadow: inset 0px 0px 9px 0px black;
}

.hljs li {
    font-size: 18px;
    line-height: 24px;
    border-left: 1px solid #ffffff;
}

.hljs-string {
    font-family: cursive, -webkit-pictograph; /* 防止引号显示为中文 */
}

.v-note-wrapper .v-note-panel .v-note-show .v-show-content, .v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
    background: transparent !important;
}

.v-note-wrapper .v-note-panel {
    border: none !important;
}

.markdown-body .highlight pre, .markdown-body pre {
    background-color: transparent !important;
}
/* 代码高亮-end */
</style>
