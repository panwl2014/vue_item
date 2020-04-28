<template>
  <div id="app">
    <Header title="爱创课堂" :back="back" :login="login">
      <div slot="login">登录</div>
    </header>
    <!-- 路由页面 -->
    <router-view></router-view>

  </div>
</template>

<style lang="scss">
@import '@/base.scss';
#app {
  height: 100%;
}
</style>

<script>
import Header from '@/components/Header';
export default {
  components: { Header },

  methods: {
    back() {
      console.log('back')
      this.$router.go(-1)
    },
    login() {
      console.log('login')
    }
  }
}
</script>
