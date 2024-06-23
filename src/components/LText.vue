<template>
  <component class="l-text" :is="tag" :style="styleProps" @click="handleClick">{{
    text
  }}</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { transformToDefaultProps, textDefaultProps, textStyleNames } from '@/defaultProps'
const defaultProps = transformToDefaultProps(textDefaultProps)
import useComponentCommon from '@/hooks/useComponentCommon'

export default defineComponent({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(props, textStyleNames)
    return { styleProps, handleClick }
  }
})
</script>

<style lang="scss" scoped>
.l-text {
  position: relative !important;
}
</style>
