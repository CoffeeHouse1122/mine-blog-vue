<template>
  <div class="mainHome">
    <ul class="articleList">
      <li v-for="item in articleList" :key="item.id">
        <a href="#"><span class="articleList-title">{{ item.title }}</span></a>
        <span class="articleList-createtime">创建时间：{{ item.createtime }}</span>
        <span class="articleList-updatetime">更新时间：{{ item.updatetime }}</span>
        <span class="articleList-summary">{{ item.summary }}</span>
        <div class="articleList-bottom">
          <a href="#"><span class="articleList-likenum">点赞：{{ item.likenum }}</span></a>
          <span class="articleList-readnum">阅读：{{ item.readnum }}</span>
        </div>
      </li>
    </ul>
    <!-- <p>{{articleList}}</p> -->
  </div>
</template>

<script>
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
        var date2 = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        data.results[i].createtime = date
        data.results[i].updatetime = date2
      }
      this.articleList = data.results
      console.log(this.articleList)
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
</style>
