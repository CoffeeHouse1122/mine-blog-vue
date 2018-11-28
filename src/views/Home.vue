<template>
    <div class="home">
        <div class="banner">
          <img src="../assets/img/Mine.jpg" title="我是你爸爸" alt="头像" :style='autorStyle'>
          <span class="banner-title">Mine 博客</span>
          <span class="banner-motto">生死有命不由命, 我命由我不由天</span>
        </div>
        <div class="header" :style="headerStyle">
          <div class="w" style="width: 1050px; margin: 0 auto">
            <div class="line"></div>
            <router-link to="/" @click.native="autorChange">首页</router-link>
            <router-link to="/main-guestbook"  @click.native="autorChange">留言板</router-link>
            <router-link to="/main-category" @click.native="autorChange">文章分类</router-link>
            <router-link to="/main-archive" @click.native="autorChange">文章归档</router-link>
          </div>
        </div>
        <div class="main">
          <router-view></router-view>
        </div>
        <div class="footer">Footer</div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      scrollTop: '', // 滚动条高度
      headerStyle: '', // 浮动栏样式
      headerTitleStyle: '', // 浮动栏标题样式
      autorStyle: '' // 头像样式
    }
  },
  methods: {
    getScrollHeight () { // 浮动栏随滚动条位置样式变化
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop >= 224) {
        this.headerStyle = 'position: fixed; top: 0; width: 100%;'
      } else {
        this.headerStyle = ''
      }
    },
    autorChange () { // 切换版块头像动画重新执行
      this.autorStyle = 'display: none;'
      setTimeout(() => { this.autorStyle = 'display: block;' }, 100)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollHeight)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScrollHeight)
  }
}
</script>

<style>
.home {
  font-size: 16px;
  width: 100%;
  overflow: hidden;
}

/* 头部banner开始 */
.banner {
  width: 100%;
  height: 200px;
  max-width: 1050px;
  position: relative;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, .3);
  text-align: center;
  color: #fff;
}
.banner img {
  display: block;
  width: 75px;
  height: 75px;
  position: absolute;
  top: 50%;
  margin-top: -37.5px;
  left: 40px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
  box-sizing: border-box;
  cursor: pointer;
  animation: change 1s linear forwards;
}
.banner img:hover {
  border: 5px solid #FFFF00;
}
@keyframes change {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(2);
  }
  40% {
    transform: scale(1.8);
  }
  60% {
    transform: scale(1.6);
  }
  80% {
    transform: scale(1.8)
  }
  100% {
    transform: scale(2)
  }
}
.banner .banner-title {
  font-family: "STKaiti";
  font-weight: 700;
  font-size: 40px;
  position: absolute;
  top: 50px;
  left: 200px;
}
.banner .banner-motto {
  font-family: "STKaiti";
  font-weight: 700;
  font-size: 40px;
  position: absolute;
  top: 110px;
  left: 200px;
}
/* 头部banner结束 */

/* 悬浮导航栏开始 */
.header {
  height: 55px;
  background-color: #100c1ac7;
  border-radius: 5px;
  border: 1px solid #100c1ac7;
  box-shadow: 0 2px 6px #100c1ac7;
  position: relative;
  top: 20px;
  margin: 0 auto;
  color: #000;
  /* text-align: center; */
  line-height: 55px;
  z-index: 100;
}
.header .line {
  position: absolute;
  top: 0;
  height: 55px;
  width: 3px;
  background-color: #FFFFFF;
  animation: myScan 5s ease-in-out infinite alternate;
  z-index: -1;
}
@keyframes myScan {
  from {
    left: 0px;
  }
  to {
    left: 100%;
  }
}
.header a {
  font-family: "STKaiti";
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  margin-left: 70px;
  color: #fff;
  background: -webkit-linear-gradient(45deg, #CCCCFF, #FFCCCC, #CCFFFF, #FF6666, #FFFF99, #CCFF99);
  color: transparent;
  -webkit-background-clip: text;
  animation: ran 20s linear infinite;

}
.header a:nth-child(2) {
  margin-left: 35px;
}
.header a:nth-child(odd):hover {
  transform: rotate(-5deg) scale(1.8);
}
.header a:nth-child(even):hover {
  transform: rotate(5deg) scale(1.8);
}
.header a:nth-child(even).router-link-exact-active {
  transform: rotate(5deg) scale(1.8);
  color: #D24D57;
}
.header a:nth-child(odd).router-link-exact-active {
  transform: rotate(-5deg) scale(1.8);
  color: #D24D57;
}
@keyframes ran {
  from {
      background-position: 0 0;
  }
  to {
      background-position: 2000px 0;
  }
}
/* 悬浮导航栏结束 */

/* 版块内容开始 */
.main {
  min-height: 1800px;
  background-color: rgba(255, 255, 255, .8);
  position: relative;
  margin: 50px auto 20px;
  border: 1px solid #fff;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
  color: #000;
  text-align: center;
  font-size: 50px;
}
/* 版块内容结束 */

/* 底部内容开始 */
.footer {
  width: 100%;
  height: 55px;
  position: relative;
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
  text-align: center;
}
/* 底部内容结束 */
</style>
