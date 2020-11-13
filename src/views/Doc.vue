<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>Doc</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">Intro</router-link>
          </li>
          <li>
            <router-link to="/doc/install">Install</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">GetStarted</router-link>
          </li>
        </ol>
        <h2>Component</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/link">Link</router-link>
          </li>
          <li>
            <router-link to="/doc/text">Text</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #1732a4;
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: $blue;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0 16px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
        color: #000;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
