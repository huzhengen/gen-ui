<template>
  <div class="home">
    <Nav />
    <div class="content">
      <div class="logo"></div>
      <div class="intro">
        <h1>GEN-UI</h1>
        <h2>基于 Vue3 和 TypeScript 的 UI 框架。</h2>
        <div class="links">
          <router-link to="/doc">Getting Started</router-link>
          <a href="//github.com/" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    > .intro {
      display: flex;
      align-items: center;
      flex-direction: column;
      h1,h2{
        text-align: center;
      }
      > .links {
        > a {
          margin: 0 1em;
        }
      }
    }
  }
}
</style>