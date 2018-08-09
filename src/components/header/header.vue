<template>
  <div class="header">
    <div class="logo">
      <img src="./logo.png">
      <span>BLOG</span>
      <el-input class="search" v-model="searchInput" placeholder="大家都在搜..."
      suffix-icon="el-icon-search"></el-input>
    </div>
    <div class="users" @click="handleUser">
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
      searchInput: ''
    }
  },
  methods: {
    handleUser () {
      this.$emit('showUsers')
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
    .logo, .users
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
</style>
