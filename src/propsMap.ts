import type { TextComponentProps } from './defaultProps'

export interface PropToForm {
  component: string
  value?: string
}

// 定义一个类型，这个类型是TextComponentProps的key的集合， value是PropToForm类型
export type PropsToForms = {
  [P in keyof TextComponentProps]?: PropToForm
}

export const mapPropsToForms: PropsToForms = {
  text: {
    component: 'el-input'
  }
}
