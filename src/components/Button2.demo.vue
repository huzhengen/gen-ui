<demo>
Size
</demo>
<template>
  <div>
    <div>
      <Button size="big">Big Button</Button>
      <Button>Default Button</Button>
      <Button size="small">Small Button</Button>
    </div>
    <div>
      <Button theme="link" size="big">Big Link</Button>
      <Button theme="link">Default Link</Button>
      <Button size="small" theme="link">Small Link</Button>
    </div>
    <div>
      <Button size="big" theme="text">Big Text</Button>
      <Button theme="text">Default Text</Button>
      <Button size="small" theme="text">Small Text</Button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Button
} from "../lib/index";

export default {
  components: {
    Button
  }
}
</script>
