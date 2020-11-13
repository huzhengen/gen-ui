<template>
  <div>
    <h1>Button Examples</h1>
    <Demo :component="Text1Demo" />
    <Demo :component="Text2Demo" />
    <Demo :component="Text3Demo" />
    <Demo :component="Text4Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Text1Demo from "./Text1.demo.vue";
import Text2Demo from "./Text2.demo.vue";
import Text3Demo from "./Text3.demo.vue";
import Text4Demo from "./Text4.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Text1Demo,
      Text2Demo,
      Text3Demo,
      Text4Demo,
    };
  },
};
</script>
