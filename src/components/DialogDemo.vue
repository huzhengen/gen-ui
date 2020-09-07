<template>
  <div>Examples</div>
  <h1>Example 1</h1>
  <Button @click="toggle">click me</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>Strong Title</strong>
    </template>
  </Dialog>
  <h1>Example 2</h1>
  <Button @click="showDialog">click me</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "Strong Title"),
        content: "hello GEN-UI",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      visible,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>