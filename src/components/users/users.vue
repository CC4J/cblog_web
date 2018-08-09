<template>
  <div class="users">
    <div class="avatar">
      <img  :src="avatar">
      <span>小草先森</span>
    </div>
    <div class="item">
      <span>个人主页</span>
      <span class="el-icon-goods"></span>
    </div>
    <div class="item">
      <span>写博客</span>
      <span class="el-icon-edit"></span>
    </div>
    <div class="item">
      <span>个人资料修改</span>
      <span class="el-icon-edit-outline"></span>
    </div>
    <div class="item">
      <span>密码修改</span>
      <span class="el-icon-setting"></span>
    </div>
    <div class="item">
      <span>退出</span>
      <span class="el-icon-back"></span>
    </div>
  </div>
</template>

<script>
import avatarUrl from '@/assets/avatar.jpg'

export default {
  data () {
    return {
      avatar: avatarUrl
    }
  }
}
</script>

<style lang="stylus" scoped>
.users
  display flex
  position absolute
  top 0
  right 0
  width 260px
  height 100%
  background #ffffff
  flex-direction column
  align-items center
  z-index 1
  .avatar
    display flex
    box-sizing border-box
    flex-direction column
    justify-content space-between
    align-items center
    width 100%
    height 164px
    padding 13px 16px
    border-bottom 1px solid rgba(34,36,38,.1)
    img
      width 80px
      height 80px
      margin-top 10px
      border-radius 50%
    span
      font-size 18px
      font-weight 700
  .item
    display flex
    justify-content space-between
    align-items center
    box-sizing border-box
    border-bottom 1px solid rgba(34,36,38,.1)
    width 100%
    height 40px
    padding 13px 16px
    font-size 14px
    color rgba(0,0,0,.87)
    cursor pointer
    &:hover
      background #fafafa
</style>
