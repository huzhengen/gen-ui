<template>
  <router-view/>
</template>

<script lang="ts" setup>
import {
  ref,
  provide
} from "vue";
import {
  router
} from "./router";

const width = document.documentElement.clientWidth;
const menuVisible = ref(width > 500);
provide("menuVisible", menuVisible); // set
router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});
</script>
