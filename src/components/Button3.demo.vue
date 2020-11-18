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
