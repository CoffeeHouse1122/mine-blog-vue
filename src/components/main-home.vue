<template>
  <div class="mainHome">
    <ul class="articleList">
      <li v-for="item in articleList" :key="item.id" >
        <span class="articleList-title" @click="forId(item.id)">{{ item.title }}</span>
        <span class="articleList-createtime">创建时间：{{ item.createtime }}</span>
        <span class="articleList-updatetime">更新时间：{{ item.updatetime }}</span>
        <span class="articleList-summary">{{ item.summary }}</span>
        <div class="articleList-bottom">
          <a href="#"><span class="articleList-likenum">点赞：{{ item.likenum }}</span></a>
          <span class="articleList-readnum">阅读：{{ item.readnum }}</span>
        </div>
      </li>
    </ul>
    <div class="Self-introduction">
      <img src="../assets/img/多彩banner.png" alt="">
      <h3>zhaopeng.qiu | 仇兆鹏</h3>
      <h5>- web front-end developer -</h5> 
      <span>一只前端小菜鸟，在这里分享和积累一些前端知识</span>
      <img class="img-bottom" src="../assets/img/多彩banner.png" alt="">
    </div>
    <div class="contact-me">
      <img class="img-top" src="../assets/img/多彩banner.png" alt="">
      <h5 class="home-github"><a href="https://github.com/CoffeeHouse1122" target="_blank" rel="noopener noreferrer" title="点个star\(^o^)/~">Github: CoffeeHouse1122</a></h5>
      <h5 class="home-weibo"><a href="https://weibo.com/5101317315/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" target="_blank" rel="noopener noreferrer" title="瞧瞧\(^o^)/~">微博: 阳光永远不要离开我</a></h5> 
      <h5 class="home-email">邮箱: coffeehouse1122@sina.com</h5>
      <img class="img-bottom" src="../assets/img/多彩banner.png" alt="">
    </div>
  </div>
</template>

<script>
// import bus from "../eventBus.js"
import axios from '../utils/axios.js'
export default {
  name: 'main-home',
  data () {
    return {
      articleList: []
    }
  },
  methods: {
    async getAllArticle () {
      const res = await axios.get('/api/article/findAllActicle')
      const data = res.data
      // 修改时间格式
      for(var i = 0; i < data.results.length; i++) {
        var dateee = new Date(data.results[i].createtime).toJSON()
        var date = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        var dateee2 = new Date(data.results[i].updatetime).toJSON()
        var date2 = new Date(+new Date(dateee2)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        data.results[i].createtime = date
        data.results[i].updatetime = date2
       }
      this.articleList = data.results
      console.log(this.articleList)
    },
    forId (id) { // 传递id值
      this.$router.push({
         path: `/main-detail/${id}`
      })
      console.log(id)
    }
  },
  mounted () {
    this.getAllArticle()
  }
}
</script>

<style>
.mainHome {
  width: 100%;
  font-family: "PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Verdana,Roboto,Noto,Helvetica Neue,sans-serif" !important;
  word-break: break-all;
}
.mainHome .articleList {
  width: 70%;
  border-right: 1px dashed #ccc;
  padding-right: 20px;

}
.mainHome .articleList li {
  display: block;
  width: 100%;
  border-bottom: 1px rgb(0,0,0,0.19) solid;
  padding: 20px 0 7px 0px;
}
.mainHome .articleList li:first-child {
  margin-top: 0;
}
.mainHome .articleList li .articleList-title {
  display: block;
  font-size: 24px;
  color: #3d3d3d;
  text-overflow:ellipsis;
  white-space: nowrap;
  padding-bottom: 4px;
  overflow: hidden;
  cursor: pointer;
}
.mainHome .articleList li .articleList-createtime {
  color: #999;
  font-size: 10px;
}
.mainHome .articleList li .articleList-updatetime {
  color: #999;
  margin-left: 20px;
  font-size: 10px;
}
.mainHome .articleList li .articleList-summary {
  font-size: 14px;
  letter-spacing: 1px;
  /* word-wrap: initial; */
  display: block;
  width: 90%;
  min-height: 77px;
  max-height: 100px;
  margin: 10px 0 0 0;
  text-align: left;
  color: #6b6b6b;
}
.mainHome .articleList li .articleList-bottom {
  width: 100%;
  height: 20px;
}
.mainHome .articleList li .articleList-readnum {
  float: right;
  font-size: 14px;
  color: #ccc;
}
.mainHome .articleList li .articleList-likenum {
  margin-left: 20px;
  font-size: 14px;
  color: #ccc;
  float: right;
}
.mainHome .articleList li .articleList-likenum:hover {
  color: #428bca;
}
.mainHome .Self-introduction,.contact-me {
  width: 25%;
  height: 264px;
  border: 1px solid #fff;
  position: absolute;
  top: 20px;
  right: 20px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
  text-align: center;
  overflow: hidden;
}
.mainHome .Self-introduction img {
  width: 100%;
}
/* .mainHome .Self-introduction h3 {
  margin-top: 80px;
} */
.mainHome .Self-introduction h5 {
  margin-top: 12px;
}
.mainHome .Self-introduction span {
  display: block;
  margin-top: 12px;
  color: #888;
  font-size: 14px;
  font-family: 'PingFangSC-Regular,微软雅黑,宋体';
}
.mainHome .Self-introduction .img-bottom {
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
  left: 0;
}
.mainHome .contact-me {
  top: 320px;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  white-space: nowrap;
}
.mainHome .contact-me img {
  width: 100%;
}
.mainHome .contact-me .img-top {
  position: absolute;
  top: 0;
  left: 0;
}
.mainHome .contact-me a {
  color: #000;
}
.mainHome .contact-me .img-bottom {
  transform: rotate(180deg);
  position: absolute;
  bottom: 0;
  left: 0;
}
.mainHome .contact-me .home-github {
  margin-top: 80px;
}
.mainHome .contact-me .home-weibo,.home-email {
  margin-top: 20px;
}
</style>
