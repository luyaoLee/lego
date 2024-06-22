<template>
  <div class="editor-view">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px" class="component-list">Aside</el-aside>
        <el-main>Main</el-main>
        <el-aside width="300px" class="component-attrs">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EditorView',
  setup() {
    return {}
  },
  components: {}
})
</script>

<style lang="scss" scoped>
.editor-view {
  .el-header {
    background-color: red;
    text-align: center;
    font-size: 30px;
    color: aliceblue;
  }
  .el-main {
    text-align: center;
  }
  .component-list {
    background-color: teal;
  }
  .component-attrs {
    background-color: yellowgreen;
  }
}
</style>
