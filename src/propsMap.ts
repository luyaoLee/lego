import type { TextComponentProps } from './defaultProps'

// 定义组件属性和表单属性的映射关系
export interface PropToForm {
  // 动态渲染的组件名
  component: string
  // 表单项的标签
  label: string
  // 数据类型转换函数
  initTransformer?: (val: string) => any
  afterTransformer?: (val: any) => any
  // 额外的组件属性，例如：el-input的type属性
  extraProps?: {
    [key: string]: any
  }
  // 动态渲染的子组件名，适用于el-select等组件，例如：el-option
  subComponent?: string
  // 动态渲染的子组件的选项，适用于el-select等组件
  options?: { [key: string]: string }[]
  valueProp?: string
  eventName?: string
}

// 定义一个类型，这个类型是TextComponentProps的key的集合， value是PropToForm类型
export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToForm
}

// 将文本组件属性转换为组件渲染数据结构
export const mapPropsToForms: PropsToForms = {
  text: {
    component: 'el-input',
    label: '文本内容',
    extraProps: { type: 'textarea', rows: 3 }
  },
  fontSize: {
    component: 'el-input-number',
    label: '字体大小',
    initTransformer: (val: string) => parseInt(val),
    afterTransformer: (val: number) => `${val}px`
  },
  lineHeight: {
    component: 'el-slider',
    label: '行高',
    extraProps: { min: 1, max: 3, step: 0.1 },
    initTransformer: (val: string) => parseFloat(val),
    afterTransformer: (val: number) => val.toString()
  },
  textAlign: {
    component: 'el-radio-group',
    subComponent: 'el-radio-button', // 适用于el-radio-group
    label: '对齐方式',
    options: [
      { label: '左', value: 'left' },
      { label: '居中', value: 'center' },
      { label: '右', value: 'right' }
    ]
  },
  fontFamily: {
    component: 'el-select',
    subComponent: 'el-option',
    label: '字体',
    options: [
      { label: '微软雅黑', value: 'Microsoft YaHei' },
      { label: '宋体', value: 'SimSun' },
      { label: '黑体', value: 'SimHei' }
    ]
  }
}
