<template>
  <div class="post">
    <div class="post-title">使用Puppeteer撸一个爬虫</div>
    <div class="post-content">
      Puppeteer是什么
      puppeteer是谷歌chrome团队官方开发的一个无界面（Headless）chrome工具。
      Chrome Headless将成为web应用自动化测试的行业标杆。
      所以我们很有必要来了解一下它。所谓的无头浏览器是指没有窗口的浏览器。
    </div>
    <div class="post-footer">
      <span class="post-avatar">小草先森</span>
      <span class="post-time">今天 10：33</span>
      <span class="post-watch">
        <span class="el-icon-view"></span>
        <span>82</span>
      </span>
      <span class="post-comment">
        <span class="el-icon-edit-outline"></span>
        <span>21</span>
      </span>
      <span class="post-like">
        <span class="el-icon-star-off"></span>
        <span>16</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  .post
    width 100%
    height 104px
    .post-title
      font-size 16px
      line-height 16px
      font-weight 600
    .post-content
      margin-top 8px
      font-size 14px
      overflow:hidden;
      text-overflow ellipsis
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
    .post-footer
      margin-top 7px
      color rgba(0,0,0,.4)
      .post-time, .post-watch, .post-comment, .post-like
        margin-left 10px
</style>
