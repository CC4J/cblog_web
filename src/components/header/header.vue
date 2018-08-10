<template>
  <div class="header">
    <div class="logo">
      <img src="./logo.png">
      <span>BLOG</span>
      <el-input class="search" v-model="searchInput" placeholder="大家都在搜..."
      suffix-icon="el-icon-search"></el-input>
    </div>
    <div class="header-login" v-if="!isLogin">
      <span @click="handleLogin" class="header-login-btn">登陆</span>
      <span class="header-signup-btn">注册</span>
    </div>
    <div v-if="isLogin" class="users" @click="handleUser">
      <img :src="avatar">
      <span class="el-icon-caret-right"></span>
    </div>
  </div>
</template>

<script>
import avatarUrl from '@/assets/avatar.jpg'

export default {
  data () {
    return {
      avatar: avatarUrl,
      searchInput: '',
      isLogin: false
    }
  },
  methods: {
    handleUser () {
      this.$emit('showUsers')
    },
    handleLogin () {
      this.$emit('login')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position fixed
    top 0
    left 0
    display flex
    justify-content space-between
    width 100%
    height 45px
    background #4b505d
    z-index 1000
    box-sizing border-box
    padding 0 8px
    transition: all .5s
    .logo, .users, .header-login
      display flex
      align-items center
      height 45px
    .logo
      img
        width 32px
        height 32px
        vertical-align top
        margin-right 4px
      span
        font-size 28px
        color #ffffff
        margin-right 20px
      .search
        width 300px
    .users
      cursor pointer
      margin-right 10px
      img
        width 28px
        height 28px
        border-radius 50%
        margin-right 4px
      span
        color #cccccc
      &:hover
        span
          color #eeeeee
    .header-login
      color rgba(255,255,255,.7)
      .header-login-btn, .header-signup-btn
        margin-right 10px
        cursor pointer
        font-size 14px
        &:hover
          color #ffffff
</style>
