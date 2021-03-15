<template>

    <div class="container">
      <div class="top-nav">
        <a-button type="primary" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">统计</a></a-breadcrumb-item>
      </a-breadcrumb>
      <ul class="login-user">
        <li>{{$store.state.userInfo.username}} <a-icon type="down" /></li>
        <li></li>
        <li class="exit" @click="out">退出</li>
      </ul>
      </div>

    </div>
</template>
<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    out() {
      console.log('zzz');
      this.$store.dispatch('outLogin');
      console.log('dscrdd');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-user{
    cursor: pointer;
    .exit{
        display: none;
    }
    &:hover{
         .exit{
             display: block;
         }
    }
}
</style>
