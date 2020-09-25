<demo>
Default
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="Nav 1">Content 1</Tab>
    <Tab title="Nav 2">Content 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import {
  Tabs,
  Tab
} from "../lib/index";
import {
  ref
} from 'vue'

export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('Nav 2')
    return {
      x
    }
  }
}
</script>
