<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide, computed, watchEffect, watch } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = ref(document.documentElement.clientWidth);
    const toggleMenuButtonVisible = computed(() =>
      width.value <= 500 ? true : false
    );
    const menuVisible = ref(width.value <= 500 ? false : true);
    watch(width, (newWidth) => {
      if (newWidth >= 500) {
        menuVisible.value = true;
      }
    });
    provide("menuVisible", menuVisible); // set
    window.addEventListener("resize", () => {
      width.value = document.documentElement.clientWidth;
    });
    router.afterEach(() => {
      if (width.value <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>