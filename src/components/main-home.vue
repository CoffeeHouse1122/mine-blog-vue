<template>
  <div class="mainHome">
    <ul class="articleList">
      <li v-for="item in articleList" :key="item.id">
        <a href="#"><span class="articleList-title">{{ item.title }}</span></a>
        <span class="articleList-createtime">创建时间：{{ item.createtime }}</span>
        <span class="articleList-updatetime">更新时间：{{ item.updatetime }}</span>
        <span class="articleList-summary">{{ item.summary }}</span>
        <span class="articleList-readnum">阅读：{{ item.readnum }}</span>
        <a href="#"><span class="articleList-likenum">点赞：{{ item.likenum }}</span></a>
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
      this.articleList = data.results
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
}
.mainHome .articleList {
  width: 70%;
}
.mainHome .articleList li {
  display: block;
  width: 100%;
  height: 200px;
  border: 1px rgb(0, 140, 255) solid;
  margin-top: 10px;
}
.mainHome .articleList li:first-child {
  margin-top: 0;
}
.mainHome .articleList li .articleList-title {
  display: block;
  font-size: 30px;
}
.mainHome .articleList li .articleList-createtime {
  color: #fa4f83;
  font-size: 12px;
}
.mainHome .articleList li .articleList-updatetime {
  color: #fa4f83;
  margin-left: 20px;
  font-size: 12px;
}
.mainHome .articleList li .articleList-summary {
  text-indent : 2em;
  letter-spacing: 1px;
  word-wrap: initial;
  display: block;
  width: 90%;
  height: 100px;
  margin: 10px auto 0;
  text-align: left;
  background: rgba(255, 255, 255, .8);
  color: #f40;
}
.mainHome .articleList li .articleList-readnum {
  margin-left: 70%;
  font-size: 14px;
  color: #0dc3ce;
}
.mainHome .articleList li .articleList-likenum {
  margin-left: 20px;
  font-size: 14px;
  color: #0dc3ce;
}
</style>
