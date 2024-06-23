<template>
  <el-container class="editor-view">
    <el-header>Header</el-header>
    <el-container class="editor-main">
      <el-aside width="300px" class="component-list">
        <component-list :list="defaultTextTemplates" @on-item-click="onItemClick"></component-list>
      </el-aside>
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
      <el-aside width="300px" class="component-attrs"></el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useEditorsStore, type ComponentData } from '@/stores/editors'
import LText from '@/components/LText.vue'
import ComponentList from '@/components/ComponentList.vue'
import { defaultTextTemplates } from '@/defaultTemplates'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'EditorView',
  components: {
    LText,
    ComponentList
  },
  setup() {
    const store = useEditorsStore()
    const components = computed(() => store.components)
    return {
      components,
      defaultTextTemplates,
      addComponent: store.addComponent
    }
  },
  methods: {
    onItemClick(item: any) {
      const data: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props: item
      }
      this.addComponent(data)
    }
  }
})
</script>

<style lang="scss" scoped>
.editor-view {
  min-height: 100vh;
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
    position: relative;
  }
  .component-attrs {
    background-color: yellowgreen;
  }
  .preview-list {
    position: relative;
  }
}
</style>
