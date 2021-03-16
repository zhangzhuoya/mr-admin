<template>
     <div class="menu-list">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="$store.state.collapsed"
      >
      <template v-for="item in $store.state.routeMenu">

        <a-sub-menu :key="item.meta.title" v-show="item.meta.hidden===false">
          <span slot="title">
          <a-icon :type="item.meta.icon" />
          <span>{{item.meta.title}}</span>
          </span>
          <template v-for="i in item.children">
<a-menu-item :key="i.meta.title" v-if="i.meta.hidden===false">
              <router-link :to="{name:i.name}">
              <a-icon :type="i.meta.icon" />
            {{i.meta.title}}
            </router-link>

          </a-menu-item>
          </template>

        </a-sub-menu>
      </template>

      </a-menu>
    </div>
</template>
<script>
export default {
  created() {
    console.log();
  },

};
</script>
