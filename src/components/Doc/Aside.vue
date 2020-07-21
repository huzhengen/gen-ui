<template>
  <aside>
    <h2>组件列表</h2>
    <ul>
      <li>
        <router-link to="/components/switch">Switch组件</router-link>
      </li>
      <li>
        <router-link to="/components/icon">Icon 组件</router-link>
      </li>
      <li>
        <router-link to="/components/button">Button 组件</router-link>
      </li>
      <li>
        <router-link to="/components/dialog">Dialog 组件</router-link>
      </li>
      <li>
        <router-link to="/components/tree">Tree 组件</router-link>
      </li>
      <li>
        <router-link to="/components/input">Input 组件</router-link>
      </li>
      <li>
        <router-link to="/components/form">Form 组件</router-link>
      </li>
      <li>
        <router-link to="/components/table">Table 组件</router-link>
      </li>
      <li>
        <router-link to="/components/scroll">Scroll 组件</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>


<style lang="scss" scoped>
 aside {
      width: 200px;
    }
</style>