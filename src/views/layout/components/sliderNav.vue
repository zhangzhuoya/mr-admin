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
        <li>用户中心 <a-icon type="down" /></li>
        <li class="exit">退出</li>
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
