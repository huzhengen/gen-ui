<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-gen"/>
      </svg>
      <span>GEN-VUE-UI</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">Doc</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"/>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject, Ref, computed} from "vue";

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const color = computed(() => {
      if (location.hash === '#/') {
        return '#fff';
      } else {
        return '#1732a4';
      }
    })
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      toggleMenu,
      color,
    };
  },
};
</script>

<style lang="scss" scoped vars="{ color }">
$blue: #1732a4;
$white: #fff;
.topnav {
  display: flex;
  padding: 14px 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    margin-right: auto;
    fill: $white;
    color: $white;
    text-decoration: none;
    height: 24px;
    display: flex;
    align-items: center;

    &-wrapper {
      margin-right: auto;
      height: 24px;
    }

    > svg {
      width: 24px;
      height: 24px;
    }

    > span {
      padding-left: 10px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: $white;

    > li {
      margin: 0 1em;

      > a {
        color: var(--color);
      }
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
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
