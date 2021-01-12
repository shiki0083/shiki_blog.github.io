<template>
  <div class="blog-footer">
    <div class="blog-footer-content">
      <p>
        Created By LJL
        <!-- <a class="github-link" href="https://github.com/shiki0083/shiki_blog">
          <Icon type="logo-github" :size="20" />
        </a> -->
      </p>
      <p>
        由
        <a class="footer-link" href="https://cn.vuejs.org/">Vue.js</a>
        强力驱动
      </p>
      <a
        :style="{ textAlign: 'left', fontSize: '12px' }"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        >ICP备案号：浙ICP备20000201号-1</a
      >
      <!-- <p :style="{textAlign: 'left', fontSize: '12px'}">备案号：浙ICP备20000201号-1</p> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.blog-footer {
  box-shadow: 0 -1px 0 0 #f0f0f0;
  padding: 10px 0;
}
p {
  margin-bottom: 5px;
}
.github-link {
  color: #495060;
  &:hover {
    color: #000;
  }
}
.footer-link {
  border-bottom: 1px solid rgb(153, 153, 153);
  color: #495060;
  &:hover {
    color: #000;
    border-bottom-color: #000;
  }
}
.blog-footer-content {
  margin: 0 auto;
}
@media (max-width: 767px) {
  .blog-footer-content {
    margin: 20px 20px;
    width: auto;
  }
}
@media (max-width: 1600px) {
  .blog-footer-content {
    width: 85%;
    max-width: 700px;
  }
}
@media (min-width: 1600px) {
  .blog-footer-content {
    // margin: 20px 20px;
    width: 1000px;
  }
}
</style>
