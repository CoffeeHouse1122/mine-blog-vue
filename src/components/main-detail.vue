<template>
  <div class="mainDetail">
    <div class="detailTop">
      <router-link to="/">首页</router-link>
      <span> ></span>
      <span> 文章详情</span>
    </div>
    <h2 class="detail-title">{{ detailData.title }}</h2>
    <span class="detail-createtime">{{ detailData.createtime }}</span>
    <!-- <div class="detail-content" v-html="detailData.content"></div> -->
    <!--
      :subfield="false"  ----- true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
      :defaultOpen="defaultData" ----- edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
      :toolbarsFlag="false" ----- 工具栏是否显示
    / -->
    <mavon-editor v-model="detailData.content" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" :boxShadow="false" />
  </div>
</template>

<script>
import axios from '../utils/axios.js'
export default {
  name: 'main-detail',
  data () {
    return {
      detailData: {},
      defaultData: 'preview'
    }
  },
  methods: {
    async getIdArticle (id) {
      const res = await axios.get('/api/article/findIdActicle?id=' + id)
      const data = res.data
      var dateee = new Date(data.results.createtime).toJSON()
      var date = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
      var dateee2 = new Date(data.results.updatetime).toJSON()
      var date2 = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
      data.results.createtime = date
      data.results.updatetime = date2
      this.detailData = data.results
      console.log(this.detailData)
    }
  },
  mounted () {
    this.getIdArticle(this.$route.params.id) 
  }
}
</script>

<style>
.detail-title {
  margin-top: 20px;
  text-align: center;
}
.detail-createtime {
  display: inline-block;
  width: 100%;
  padding: 20px 0 0;
  text-align: center;
  font-size: 12px;
}
.detail-content {
  padding: 30px 0 0;
  font-size: 14px;
}
.detailTop {
  height: 50px;
  border-bottom: 1px dashed #ccc;
  line-height: 50px; 
}
.detailTop a {
  color: #000;
  font-weight: 700;
}
.detailTop span {
  color: #999;
}
</style>
