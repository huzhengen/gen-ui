<demo>
Level
</demo>
<template>
  <div>
    <div>
      <Button level="main">Main</Button>
      <Button>Default</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">Main</Button>
      <Button theme="link">Default</Button>
      <Button theme="link" level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="text" level="main">Main</Button>
      <Button theme="text">Default</Button>
      <Button theme="text" level="danger">Danger</Button>
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
