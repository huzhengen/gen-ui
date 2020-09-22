<template>
  <div class="home">
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>GEN-UI</h1>
        <h2>A Vue UI Library</h2>
        <p class="actions">
          <a href="https://github.com/huzhengen/gen-ui" target="_blank">GITHUB</a>
          <router-link to="/doc">GET STARTED</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue" />
          </svg>
          <h3>Vue 3</h3>
          <p>Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts" />
          </svg>
          <h3>TypeScript</h3>
          <p>TypeScript</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-webcode" />
          </svg>
          <h3>Clear Code</h3>
          <p>Clear Code</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 5px;
$blue: #1732a4;
$color: #007974;
a {
  text-decoration: none;
}
.topnavAndBanner {
  background: $blue;
  // clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #201f24;
  background: $blue;
  @media (min-width: 800px) {
    padding: 70px 0 40px;
  }
  @media (min-width: 1200px) {
    padding: 100px 0 70px;
  }
  h1,
  h2 {
    text-shadow: 0 0 2px white;
  }
  h1 {
    color: #fff;
  }
  h2 {
    color: #fff;
    font-size: 18px;
    padding: 10px 0;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 10px;
      background: #201f24;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 18px;
      background: #fff;
      color: $blue;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>