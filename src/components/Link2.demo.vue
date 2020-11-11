<demo>
Size
</demo>
<template>
  <div>
    <div>
      <Button theme="link" size="big">Big Link</Button>
      <Button theme="link">Default Link</Button>
      <Button size="small" theme="link">Small Link</Button>
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
