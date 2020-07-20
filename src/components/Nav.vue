<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">GEN-UI</router-link>
      </div>
      <ul class="menu">
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
        <li>
          <a href="//github.com/" target="_blank">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
header {
  nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 16px 0;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
  }
}
</style>