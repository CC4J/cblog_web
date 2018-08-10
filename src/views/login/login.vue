<template>
  <div class="login">
    <div class="login-content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input size="medium" v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" size="medium" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="login-btn-group">
          <el-button size="medium" type="primary" @click="onSubmit">登陆</el-button>
          <el-button size="medium" @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {

    },
    onCancel () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="stylus">
  .login-content
    width 500px
    padding 60px
    background #ffffff
    margin 0 auto
    margin-top 150px
    .login-btn-group
      margin-top 40px
      text-align center
</style>
