<template>
  <el-container class="editor-view">
    <el-header>Header</el-header>
    <el-container class="editor-main">
      <!-- 左侧模版区 -->
      <el-aside width="300px" class="component-list">
        <component-list :list="defaultTextTemplates" @on-item-click="onItemClick"></component-list>
      </el-aside>
      <!-- 中间画布区 -->
      <el-main>
        <div class="preview-list">
          <editor-wrapper
            v-for="item in components"
            :key="item.id"
            :id="item.id"
            :active="currentElement ? currentElement.id === item.id : false"
            @set-current-element="setCurrentElement"
          >
            <component :is="item.name" v-bind="item.props"></component>
          </editor-wrapper>
        </div>
      </el-main>
      <!-- 属性编辑区 -->
      <el-aside width="300px" class="component-attrs">
        <props-table
          v-if="currentElement"
          :props="currentElement.props"
          @change="onChange"
        ></props-table>
        <pre v-if="currentElement">{{ currentElement.props }}</pre>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useCurrentStore, useEditorsStore, type ComponentData } from '@/stores/editors'
import LText from '@/components/LText.vue'
import ComponentList from '@/components/ComponentList.vue'
import EditorWrapper from '@/components/EditorWrapper.vue'
import PropsTable from '@/components/PropsTable.vue'
import { defaultTextTemplates } from '@/defaultTemplates'
import type { TextComponentProps } from '@/defaultProps'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'EditorView',
  components: {
    LText,
    ComponentList,
    EditorWrapper,
    PropsTable
  },
  setup() {
    const store = useEditorsStore()
    const components = computed(() => store.components)
    const currentStore = useCurrentStore()
    const currentElement = computed(() => currentStore.currentElement)
    return {
      // 当前画布中的组件
      components,
      defaultTextTemplates,
      addComponent: store.addComponent,
      // 当前画布选中的组件
      currentElement,
      setCurrentElement: currentStore.setCurrentElement,
      updateCurrentElement: currentStore.updateCurrentElement
    }
  },
  methods: {
    // 将左侧模版组件添加到中间画布
    onItemClick(item: any) {
      const data: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props: item
      }
      this.addComponent(data)
    },
    // 通过右侧编辑器修改属性，触发中间画布当前元素的更新
    onChange(data: { [key: string]: any }) {
      const { props } = this.currentElement as ComponentData
      props[data.key as keyof TextComponentProps] = data.value
      this.updateCurrentElement(props)
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
    background-color: #f5f7fa;
    position: relative;
  }
  .component-attrs {
    background-color: #f5f7fa;
  }
  .preview-list {
    position: relative;
  }
}
</style>
