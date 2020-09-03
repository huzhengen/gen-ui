<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">BUTTON</Button>
    <Button theme="button">BUTTON</Button>
    <Button theme="link">LINK</Button>
    <Button theme="text">TEXT</Button>
  </div>
  <h1>示例2</h1>
  <h2>按钮大小</h2>
  <div>
    <div>
      <Button size="big">BUTTON</Button>
      <Button>BUTTON</Button>
      <Button size="small">BUTTON</Button>
    </div>
    <div>
      <Button theme="link" size="big">LINK</Button>
      <Button theme="link">LINK</Button>
      <Button size="small" theme="link">LINK</Button>
    </div>
    <div>
      <Button size="big" theme="text">TEXT</Button>
      <Button theme="text">TEXT</Button>
      <Button size="small" theme="text">TEXT</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <h2>按钮level</h2>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </dir>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>