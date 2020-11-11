<demo>
Level
</demo>
<template>
  <div>
    <div>
      <Button level="main">Main Button</Button>
      <Button>Default Button</Button>
      <Button level="danger">Danger Button</Button>
    </div>
    <div>
      <Button theme="text" level="main">Main Text</Button>
      <Button theme="text">Default Text</Button>
      <Button theme="text" level="danger">Danger Text</Button>
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
