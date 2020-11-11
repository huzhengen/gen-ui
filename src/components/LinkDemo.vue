<template>
  <div>
    <h1>Link Examples</h1>
    <Demo :component="Link1Demo" />
    <Demo :component="Link2Demo" />
    <Demo :component="Link3Demo" />
    <Demo :component="Link4Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Link1Demo from "./Link1.demo.vue";
import Link2Demo from "./Link2.demo.vue";
import Link3Demo from "./Link3.demo.vue";
import Link4Demo from "./Link4.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Link1Demo,
      Link2Demo,
      Link3Demo,
      Link4Demo,
    };
  },
};
</script>
