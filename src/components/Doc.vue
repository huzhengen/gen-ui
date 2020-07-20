<template>
  <div class="doc">
    <Nav />
    <div class="content">
      <aside>
        <Aside />
      </aside>
      <main>
        <Main />
      </main>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import Aside from "./Doc/Aside.vue";
import Main from "./Doc/Main.vue";
export default {
  name: "Doc",
  components: {
    Nav,
    Aside,
    Main
  }
};
</script>

<style lang="scss" scoped>
.doc {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    display: flex;
    flex-grow: 1;
    aside {
      width: 200px;
    }
    main {
      width: 100%;
      max-width: 1000px;
    }
  }
}
</style>