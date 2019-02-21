<template>
  <div class="mainDetail">
    <h2 class="detail-title">{{ detailData.title }}</h2>
    <span class="detail-createtime">{{ detailData.createtime }}</span>
    <div class="detail-content" v-html="detailData.content"></div>
  </div>
</template>

<script>
import axios from '../utils/axios.js'
export default {
  name: 'main-detail',
  data () {
    return {
      detailData: {}
    }
  },
  methods: {
    async getIdArticle (id) {
      const res = await axios.get('/api/article/findIdActicle?id='+id)
      const data = res.data
      this.detailData = data.results
      console.log(this.detailData)
    }
  },
  mounted () {
    this.getIdArticle(1)
  }
}
</script>

<style>
.detail-title {
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
</style>
