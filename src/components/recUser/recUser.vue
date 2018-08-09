<template>
  <div class="recUser">
    <img :src="avatar">
    <div class="recUser-content">
      <div class="recUser-avatar">小草先森</div>
      <div class="rcUser-detail">
        <span>32篇 文章</span>
        <span>2.3k 次访问</span>
      </div>
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

<style lang="stylus">
  .recUser
    display flex
    width 100%
    height 60px
    img
      width 60px
      height 60px
      border-radius 50%
      margin-right 20px
    .recUser-content
      display flex
      height 60px
      flex-direction column
      justify-content center
      .recUser-avatar
        margin-bottom 10px
        font-size 16px
        font-weight 700
      .rcUser-detail
        color rgba(0, 0, 0, .4)
        & span:first-child
          margin-right 10px
</style>
