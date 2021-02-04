<template>
  <div class="contain">
    <router-link :to="{ name: 'PageDetail', params: { id: page._id } }">
      <div class="page-title">{{ page.title }}</div>
    </router-link>
    <div class="page-info">
      <span
        class="create-time"
        v-if="
          Common.formatTime(page.update_time, '3') ===
            Common.formatTime(page.create_time, '3')
        "
      >
        创建于
        <time>{{ Common.formatTime(page.update_time, "3") }}</time>
      </span>
      <span class="create-time" v-else>
        更新于
        <time>{{ Common.formatTime(page.update_time, "3") }}</time>
      </span>
      <span class="create-user">
        &nbsp;|&nbsp;作者
        <router-link
          :to="{ name: 'UserDetail', params: { username: page.create_user } }"
        >
          <span class="user-span">{{ page.create_user }}</span>
        </router-link>
      </span>
      <span class="page-tag">
        &nbsp;|&nbsp;标签
        <template v-for="(tag, i) in page.tags">
          <router-link
            :to="{ name: 'TagDetail', params: { name: tag } }"
            :key="`${i}router`"
          >
            <span class="tag-span">{{ tag }}</span>
          </router-link>
          <span v-if="i < page.tags.length - 1" :key="`${i}span`">,</span>
        </template>
      </span>
    </div>
    <div class="page-body m-editor-preview" v-html="markdownBody" />
  </div>
</template>
<script>
export default {
  props: ["page"],
  computed: {
    markdownBody() {
      return this.marked(this.page.content);
    }
  }
};
</script>
<style lang="scss" scoped>
.contain {
  margin-bottom: 100px;
}
.page-title {
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 10px;
  width: auto;
  display: inline-block;
  color: #555;
  border-bottom: 2px solid #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0px;
    left: 0px;
    background-color: rgb(0, 0, 0);
    visibility: hidden;
    transform: scaleX(0);
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  &:hover {
    &::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
}
.page-info {
  color: #999;
  font-size: 12px;
  margin: 0 0 20px;
  .user-span,
  .tag-span {
    color: #555;
    display: inline-block;
    border-bottom: 1px solid #ccc;
    &:hover {
      border-bottom-color: #222;
      color: #222;
    }
  }
}
.page-body {
  line-height: 2;
  font-size: 15px;
}
</style>
