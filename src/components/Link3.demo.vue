<demo>
Level
</demo>
<template>
  <div>
    <div>
      <Button theme="link" level="main">Main Link</Button>
      <Button theme="link">Default Link</Button>
      <Button theme="link" level="danger">Danger Link</Button>
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
