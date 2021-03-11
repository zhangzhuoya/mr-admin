<template>
  <div class="home">
   <left-menu/>
   <div :class="{'right-container':true,'menu-unfold':$store.state.collapsed}">
   <slider-nav></slider-nav>
   </div>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue';
import sliderNav from './components/sliderNav.vue';

export default {
  components: {
    leftMenu,
    sliderNav,
  },
};
</script>
<style lang="less" scoped>
.home {
  .menu-list {
    width: 200px;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    /deep/  .ant-menu {
      height: 100%;
    }
  }
  .right-container{
    margin-left: 200px;
    transition: all 0.3s;
    &.menu-unfold{
      margin-left: 80px;
    }
  /deep/ .container{
    // margin-left: 200px;
    // border: 1px solid red;
   /deep/ .top-nav{
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding-left: 8px;
    background: #fff;
    border-bottom: #eee;
      .ant-breadcrumb {
        display: inline-block;
        margin-left: 8px;
      }
      .login-user{
         float: right;
         margin-left: 20px;
         position: fixed;
         top:0px;
         right:0px
      }
    }
  }
  }

}
</style>
