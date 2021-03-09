<demo>
Level
</demo>
<template>
  <div>
    <div>
      <Button level="main">Main</Button>
      <Button level="secondary">Secondary</Button>
      <Button level="success">Success</Button>
      <Button level="danger">Danger</Button>
      <Button level="warning">Warning</Button>
      <Button level="info">Info</Button>
      <Button level="light">Light</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";

export default {
  components: {
    Button,
  },
};
</script>
