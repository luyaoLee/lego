<template>
  <div class="component-list" v-for="(item, index) in list" :key="index" @click="onItemClick(item)">
    <l-text v-bind="item"></l-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LText from './LText.vue'
import { cloneDeep } from 'lodash-es'

export default defineComponent({
  name: 'component-list',
  components: {
    LText
  },
  emits: ['on-item-click'],
  props: {
    list: {
      type: Array<any>,
      required: true
    }
  },
  setup(props, ctx) {
    const onItemClick = (item: any) => {
      ctx.emit('on-item-click', cloneDeep(item))
    }
    return { onItemClick }
  }
})
</script>

<style lang="scss" scoped></style>
