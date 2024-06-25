<template>
  <div class="props-table">
    <div class="prop-item" v-for="(value, key) in finalProps" :key="key">
      <span class="label">{{ value?.label }}</span>
      <component
        :is="value.component"
        :[value.valueProp]="value.value"
        v-bind="value.extraProps"
        v-on="value.events"
      >
        <template v-if="value.options">
          <component
            v-for="item in value.options"
            :key="item.value"
            :is="value.subComponent"
            v-bind="item"
          ></component>
        </template>
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { mapPropsToForms } from '@/propsMap'
import { reduce } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import type { TextComponentProps } from '@/defaultProps'
import type { PropToForm } from '@/propsMap'

// 这里是处理数据时添加的一些额外属性
interface FormProps extends PropToForm {
  // 表单项的默认值
  value: string
  // 自定义绑定属性名，默认值为： model-value
  valueProp: string
  // 自定义事件名，默认值为：change
  eventName: string
  // 自定义事件处理函数
  events: {
    [key: string]: (val: any) => void
  }
}

export default defineComponent({
  name: 'props-table',
  props: {
    // 组件的属性：text、color 等
    props: {
      type: Object,
      required: true
    }
  },
  // 组件属性更改时通知父组件
  emits: ['change', 'input'],
  setup(props, { emit }) {
    const count = ref(0)
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          // 将{ text: 'hello' } 转换为这种类型 { text: { value: 'hello', component: 'el-input' } }
          const newKey = key as keyof TextComponentProps
          const item = mapPropsToForms[newKey]
          if (item) {
            const {
              valueProp = 'model-value',
              eventName = 'update:model-value',
              initTransformer,
              afterTransformer
            } = item
            const newItem: FormProps = {
              ...item,
              value: initTransformer ? initTransformer(value) : value,
              valueProp,
              eventName,
              events: {
                [eventName]: (e: any) => {
                  emit('change', { key, value: afterTransformer ? afterTransformer(e) : e })
                }
              }
            }
            result[newKey] = newItem
          }
          return result
        },
        {} as { [key: string]: FormProps }
      )
    })
    return {
      count,
      finalProps
    }
  }
})
</script>

<style lang="scss" scoped>
.prop-item {
  display: flex;
}

.label {
  width: 100px;
  padding-right: 10px;
  flex-shrink: 0;
}
</style>
