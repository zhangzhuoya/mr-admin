<template>

    <div class="container">
      <div class="top-nav">
        <a-button type="primary" @click="toggleCollapsed">
        <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-breadcrumb>
        <a-breadcrumb-item>{{currentRoute[0]?currentRoute[0].meta.title:""}}</a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link :to="{name:currentRoute[1].name}" href="">
          {{currentRoute[1]?currentRoute[1].meta.title:""}}
          </router-link>
        </a-breadcrumb-item>
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
  data() {
    return {
      currentRoute: this.$router.currentRoute.matched,
    };
  },
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
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute.matched;
    },
  },
  created() {
    console.log(this.$router.currentRoute.matched);
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
