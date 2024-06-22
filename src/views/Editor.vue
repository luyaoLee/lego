<template>
  <div class="editor-view">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px" class="component-list">Aside</el-aside>
        <el-main>
          <div class="preview-list">
            <component
              v-for="item in components"
              :key="item.id"
              :is="item.name"
              v-bind="item.props"
            ></component>
          </div>
        </el-main>
        <el-aside width="300px" class="component-attrs">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useEditorsStore } from '@/stores/editors'
import LText from '@/components/LText.vue'

export default defineComponent({
  name: 'EditorView',
  components: {
    LText
  },
  setup() {
    const store = useEditorsStore()
    const components = computed(() => store.componets)
    return { components }
  }
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
