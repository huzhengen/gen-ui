<template>
  <div>Examples</div>
  <h1>Example 1</h1>
  <Tabs v-model:selected="x">
    <Tab title="Tab1">Content 1</Tab>
    <Tab title="Tab2">Content 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("Tab1");
    return {
      x,
    };
  },
};
</script>