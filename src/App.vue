<template>
  <div id="app">
    <!-- 用户列表 -->
    <transition name="users">
      <users v-show="usersLock"></users>
    </transition>
    <!-- 页面内容 -->
    <div class="wrapper" ref="wrapper">
      <!-- 头部 -->
      <c-header @showUsers="toggleUsers"></c-header>
    </div>
    <!-- 遮罩层 -->
    <transition name="shade">
      <div class="shade" v-show="shadeLock" @click="clickShade"></div>
    </transition>
  </div>
</template>

<script>
import Users from '@/components/users/users'
import CHeader from '@/components/header/header'

export default {
  name: 'App',
  components: {
    Users,
    CHeader
  },
  data () {
    return {
      usersLock: false,
      shadeLock: false
    }
  },
  methods: {
    toggleUsers () { // 用户点击事件
      // 显示右侧用户列表
      this.usersLock = true
      // 移动内容区域
      var bodyElm = this.$refs.wrapper
      bodyElm.style.transform = 'translateX(-260px)'
      // 显示遮罩层
      this.shadeLock = true
    },
    clickShade () { // 遮罩点击事件
      // 隐藏这招
      this.shadeLock = false
      // 隐藏用户列表
      this.usersLock = false
      // 移动内容区域
      var bodyElm = this.$refs.wrapper
      bodyElm.style.transform = 'translateX(0px)'
    }
  }
}
</script>

<style lang="stylus">
.users-enter-active
  transition: all .5s

.users-leave-active
  transition: all .5s

.users-enter, .users-leave-to
  transform translateX(260px)
  opacity: 0

.shade-enter-active
  transition: all .5s

.shade-leave-active
  transition: all .5s

.shade-enter, .shade-leave-to
  transform translateX(260px)
  opacity: 0

html, body
  width 100%
  height 100%
  overflow hidden
  margin 0
  padding 0
  #app
    width 100%
    height 100%
    .wrapper
      background #f9f9f9
      height 1000px
      transition: all .5s
    .shade
      position absolute
      top 0
      left -260px
      width 100%
      height 100%
      background rgba(0,0,0,.4)
      z-index 1001
</style>
