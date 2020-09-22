<demo>
Size
</demo>
<template>
  <div>
    <div>
      <Button size="big">Big</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </div>
    <div>
      <Button theme="link" size="big">Big</Button>
      <Button theme="link">Default</Button>
      <Button size="small" theme="link">Small</Button>
    </div>
    <div>
      <Button size="big" theme="text">Big</Button>
      <Button theme="text">Default</Button>
      <Button size="small" theme="text">Small</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
