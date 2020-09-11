<template>
  <div class="topnav">
    <router-link to="/" class="logo-wrapper">
      <svg class="logo">
        <use xlink:href="#icon-gen" />
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">DOC</router-link>
      </li>
    </ul>
    <svg v-if="toggleButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu" />
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
$blue: #1732a4;
$white: #fff;
.topnav {
  display: flex;
  padding: 14px 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background: $blue;
  box-shadow: 0 0 2px rgba(88, 130, 220, 1);
  .logo {
    &-wrapper {
      margin-right: auto;
      height: 24px;
    }
    width: 24px;
    height: 24px;
    fill: $white;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: $white;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    fill: $white;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    .logo-wrapper {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>