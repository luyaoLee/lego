import type { TextComponentProps } from './defaultProps'

export interface PropToForm {
  component: string
  label: string
  value?: string
  dataTypeTransformer?: (val: string) => any
  extraProps?: {
    [key: string]: any
  }
  // 适用于el-select等组件
  subComponent?: string
  options?: { [key: string]: string }[]
}

// 定义一个类型，这个类型是TextComponentProps的key的集合， value是PropToForm类型
export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToForm
}

export const mapPropsToForms: PropsToForms = {
  text: {
    component: 'el-input',
    label: '文本内容',
    extraProps: { type: 'textarea', rows: 3 }
  },
  fontSize: {
    component: 'el-input-number',
    label: '字体大小',
    dataTypeTransformer: (val: string) => parseInt(val)
  },
  lineHeight: {
    component: 'el-slider',
    label: '行高',
    extraProps: { min: 1, max: 3, step: 0.1 },
    dataTypeTransformer: (val: string) => parseFloat(val)
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
