<demo>
Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">Open Dialog</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "Title"),
        content: "Hello",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>
