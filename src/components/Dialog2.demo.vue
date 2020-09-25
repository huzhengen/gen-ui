<demo>
Open Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">Open Dialog</Button>
  </div>
</template>

<script lang="ts">
import {
  Button,
  openDialog
} from "../lib/index";
import {
  h
} from 'vue'

export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, 'Title'),
        content: 'Content',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>
