<template>
  <div class="props-table">
    <div class="prop-item" v-for="(value, key) in finalProps" :key="key">
      <component v-if="value" :is="value.component" :value="value.value"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { mapPropsToForms } from '@/propsMap'
import { reduce } from 'lodash-es'
import { computed, defineComponent } from 'vue'
import type { TextComponentProps } from '@/defaultProps'
import type { PropsToForms } from '@/propsMap'

export default defineComponent({
  name: 'props-table',
  props: {
    // 组件的属性：text、color 等
    props: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          // 将{ text: 'hello' } 转换为这种类型 { text: { value: 'hello', component: 'el-input' } }
          const newKey = key as keyof TextComponentProps
          const item = mapPropsToForms[newKey]
          if (item) {
            item.value = value
            result[newKey] = item
          }
          return result
        },
        {} as PropsToForms
      )
    })
    return {
      finalProps
    }
  }
})
</script>

<style lang="scss" scoped></style>
