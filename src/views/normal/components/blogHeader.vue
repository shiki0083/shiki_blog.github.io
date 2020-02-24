<template>
  <div class="header-inner">
    <div class="site-meta">
      <router-link :to="{name: 'normalPageList'}" class="brand">
        <span class="logo-line-before" />
        <span class="site-title">
          <!-- <img
            :src="logo"
            class="site-logo"
          />-->
          Shiki
        </span>
        <span class="logo-line-after" />
      </router-link>
    </div>
    <transition name="slide-fade">
      <div class="site-nav" v-if="show_ul">
        <ul class="menu">
          <template v-for="(route, i) in routes.children">
            <li :key="i" class="menu-item" v-if="route.meta.inHeaderList">
              <router-link :to="{name: route.name}">{{ route.meta.title }}</router-link>
            </li>
          </template>
        </ul>
        <div :class="['site-search', {'active': isFocus}]">
          <div class="site-search-form">
            <input
              class="search-input"
              placeholder="搜索"
              v-model="keywords"
              @focus="isFocus=true"
              @blur="isFocus=false"
              @keyup.enter="searchPage"
            />
            <Icon
              :class="['search-icon']"
              type="md-search"
              size="22"
              ref="searchIcon"
              @click="searchPage"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { bus } from "../../../bus/index";
export default {
  data() {
    return {
      isFocus: false,
      keywords: "",
      logo: require("@/assets/img/logo.png"),
      show_ul: false
    };
  },
  computed: {
    routes() {
      return this.$store.state.normal.routers;
    }
  },
  mounted() {
    setTimeout(() => {
      this.show_ul = true;
    }, 500);
  },
  methods: {
    searchPage() {
      // this.$router.push({ name: 'normalPageList' })
      bus.$emit("searchPage", this.keywords);
    }
  }
};
</script>
<style lang="scss">
@import "./blogHeader.scss";
</style>
