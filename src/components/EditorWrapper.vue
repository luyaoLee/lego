<template>
  <div class="editor-wrapper" @click="onItemClick(id)" :class="{ active: active }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'editor-wrapper',
  props: {
    id: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: ['set-current-element'],
  setup(props, { emit }) {
    const onItemClick = (id: string) => {
      emit('set-current-element', id)
    }
    return {
      onItemClick
    }
  }
})
</script>

<style lang="scss" scoped>
.editor-wrapper {
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}
.editor-wrapper:hover {
  border: 1px dashed #ccc;
}
.editor-wrapper.active {
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}
</style>
