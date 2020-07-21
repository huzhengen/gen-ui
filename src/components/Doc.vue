<template>
  <div class="doc">
    <Nav />
    <div class="content">
      <Aside />
      <Main />
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
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>