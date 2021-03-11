<template>
     <div class="menu-list">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>首页</span></span>
          <a-menu-item key="5">
         {{$store.state.collapsed}}
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>商品</span></span>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-menu-item key="10">
            Option 10
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
</template>
<script>
export default {

};
</script>
