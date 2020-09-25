<demo>
Default
</demo>
<template>
  <div>
    <Button @click="toggle">Open Dialog</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <p>Content</p>
      </template>
      <template v-slot:title>
        <strong>Title</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {
  Button,
  Dialog
} from "../lib/index"
import {
  ref
} from 'vue'

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
    }
    return {
      x,
      toggle,
      f1,
      f2
    }
  }
}
</script>
