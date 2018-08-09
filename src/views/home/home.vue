<template>
  <div class="home">
    <div class="home-content">
      <!-- 选项卡 -->
      <el-tabs v-model="activeTab" @tab-click="clickTabs">
        <el-tab-pane label="热门推荐" name="hot">
          <div v-for="(post, index) in 10" :key="index" class="home-post">
            <post></post>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="最新发表" name="new">
          <div v-for="(post, index) in 10" :key="index" class="home-post">
            <post></post>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
      <div class="home-newblog">
        <span class="el-icon-edit-outline"></span>
        <span>写博客</span>
      </div>
    </div>
    <div class="home-aside">
      <div class="home-aside-title">本周最受欢迎博主</div>
      <div v-for="(post, index) in 6" :key="index" class="home-recommend-user">
        <rec-user></rec-user>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/post/post'
import RecUser from '@/components/recUser/recUser'

export default {
  components: {
    Post,
    RecUser
  },
  data () {
    return {
      activeTab: 'hot'
    }
  },
  methods: {
    clickTabs (tab, event) { // 选项卡点击事件

    }
  }
}
</script>

<style lang="stylus">
  .home
    width 1100px
    min-height 600px
    margin 0 auto
    background #ffffff
    font-size 0
    .home-content, .home-aside
      display inline-block
      vertical-align top
    .home-content
      position relative
      width 65%
      font-size 14px
      box-sizing border-box
      padding 15px 30px
      .home-newblog
        position absolute
        font-size 16px
        right 32px
        top 24px
        cursor pointer
        color #666
        &:hover
          color #000
      .home-post
        margin-bottom 28px
      .el-tabs__header
        margin-bottom 28px
        .el-tabs__item
          font-size 18px
          font-weight 600
    .home-aside
      width 35%
      font-size 14px
      box-sizing border-box
      padding 15px 40px
      .home-aside-title
        font-size 18px
        font-weight 600
        margin-bottom 14px
      .home-recommend-user
        margin-bottom 20px
</style>
