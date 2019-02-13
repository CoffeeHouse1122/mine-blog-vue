<template>
    <div class="home">
        <div class="banner">
          <img src="../assets/img/Mine.jpg" title="我是你爸爸" alt="头像" :style='autorStyle'>
          <span class="banner-title">Mine 博客</span>
          <span class="banner-motto">生死有命不由命, 我命由我不由天</span>
          <a href="javascript:;" class="icon-music">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </a>
        </div>
        <div class="header" :style="headerStyle">
          <div class="w" style="width: 1050px; margin: 0 auto">
            <!-- <div class="line"></div> -->
            <router-link to="/" @click.native="autorChange">首页</router-link>
            <router-link to="/main-guestbook"  @click.native="autorChange">留言板</router-link>
            <router-link to="/main-category" @click.native="autorChange">文章分类</router-link>
            <router-link to="/main-archive" @click.native="autorChange">文章归档</router-link>
          </div>
        </div>
        <div class="main">
          <router-view></router-view>
        </div>
        <div class="footer">zhaopeng.qiu</div>
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
        this.headerStyle = 'position: fixed; top: 0; width: 100%; background-color: #fff; border-radius: 0;'
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
  margin: 10px auto 0;
  /* background-color: rgba(0, 0, 0, .3); */
  text-align: center;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 6px #100c1ac7;
}
.banner img {
  display: block;
  width: 75px;
  height: 75px;
  position: absolute;
  top: 50%;
  margin-top: -37.5px;
  left: 60px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  box-sizing: border-box;
  cursor: pointer;
  animation: change 1s linear forwards;
}
.banner img:hover {
  width: 70px;
  height: 70px;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;;
}
@keyframes change {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(2) rotateY(-30deg);
  }
  40% {
    transform: scale(1.8);
  }
  60% {
    transform: scale(1.6);
  }
  80% {
    transform: scale(1.8) rotateY(30deg);
  }
  100% {
    transform: scale(2);
  }
}
.banner .banner-title {
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 40px;
  position: absolute;
  top: 50px;
  left: 200px;
  animation: neon 1.5s ease-in-out infinite alternate;
}
.banner .banner-motto {
  font-weight: 700;
  font-size: 40px;
  position: absolute;
  top: 110px;
  left: 200px;
  letter-spacing: 3px;
  animation: neon 1.5s ease-in-out infinite alternate;
}
@keyframes neon {
  0% {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #228DFF, 0 0 5px #228DFF, 0 0 6px #228DFF, 0 0 7px #228DFF, 0 0 8px #228DFF;
  }

  100% {
    text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #228DFF, 0 0 10px #228DFF, 0 0 12px #228DFF, 0 0 14px #228DFF, 0 0 16px #228DFF;
  }
}
.banner .icon-music {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, .8);
  border-radius: 10px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: center;
  line-height: 66px;
}
.banner .icon-music i {
  display: inline-block;
  width: 4px;
  background-color: #0d52b2;
  margin: 0 2px;
}
.banner .icon-music i:first-child {
  height: 25px;
  transform-origin:0 25px;
  animation: music 0.6s 0.4s infinite;
}
.banner .icon-music i:nth-child(2) {
  height: 15px;
  transform-origin:0 15px;
  animation: music 0.5s 0.4s infinite;
}
.banner .icon-music i:nth-child(3) {
  height: 20px;
  transform-origin:0 20px;
  animation: music 0.6s 0.4s infinite;
}
.banner .icon-music i:nth-child(4) {
  height: 25px;
  transform-origin:0 25px;
  animation: music 0.5s 0.4s infinite;
}
@keyframes music {
  0%, 100% {
    transform: scaleY(1);
  }
  20% {
    transform: scaleY(0.5)
  }
  40% {
    transform: scaleY(0.7)
  }
  60% {
    transform: scaleY(0.3)
  }
  80% {
    transform: scaleY(0.6)
  }
}
/* 头部banner结束 */

/* 悬浮导航栏开始 */
.header {
  height: 55px;
  background-color: rgba(255, 255, 255, .8);
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
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
  font-size: 25px;
  font-weight: 700;
  display: inline-block;
  margin-left: 90px;
  color: #000;
}
.header a:nth-child(1) {
  margin-left: 35px;
}
.header a:nth-child(odd):hover {
  transform: rotate(-10deg) scale(1.2);
}
.header a:nth-child(even):hover {
  transform: rotate(10deg) scale(1.2);
}

.header a:nth-child(even).router-link-exact-active {
  transform: rotate(10deg) scale(1.5);
  color: #D24D57;
}
.header a:nth-child(odd).router-link-exact-active {
  transform: rotate(-10deg) scale(1.5);
  color: #D24D57;
}
/* 悬浮导航栏结束 */

/* 版块内容开始 */
.main {
  min-height: 1800px;
  background-color: rgba(255, 255, 255, .8);
  position: relative;
  margin: 50px auto 20px;
  padding: 20px;
  border: 1px solid #fff;
  box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
  box-sizing: border-box;
  color: #000;
  border-radius: 20px;
}
/* 版块内容结束 */

/* 底部内容开始 */
.footer {
  width: 100%;
  height: 55px;
  position: relative;
  background-color: rgba(255, 255, 255, .8);
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  line-height: 55px;
}
/* 底部内容结束 */
</style>
