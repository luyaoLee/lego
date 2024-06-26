import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import type { TextComponentProps } from '@/defaultProps'

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

export interface ComponentData {
  // 元素的属性
  props: Partial<TextComponentProps>
  id: string
  name: string
}

export const useEditorsStore = defineStore('editors', () => {
  const components = ref<ComponentData[]>(testComponents)
  const { updateCurrentElement } = useCurrentStore()

  function addComponent(component: ComponentData) {
    components.value.push(component)
  }

  function deleteCurrentComponent(id: string) {
    components.value = components.value.filter((component) => component.id !== id)
    updateCurrentElement(undefined)
  }
  return { components, addComponent, deleteCurrentComponent }
})

export const useCurrentStore = defineStore('currentElement', () => {
  const currentElement = ref<ComponentData>()
  const store = useEditorsStore()
  function setCurrentElement(id: string) {
    currentElement.value = store.components.find((component) => component.id === id)
  }

  function updateCurrentElement(newVal: any) {
    currentElement.value = newVal
  }

  return {
    currentElement,
    setCurrentElement,
    updateCurrentElement
  }
})

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: 'l-text',
    props: { text: 'Hello World1', fontSize: '12px', position: 'relative', color: 'orange' }
  },
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello World2', position: 'relative' } },
  {
    id: uuidv4(),
    name: 'l-text',
    props: {
      text: 'Hello World3',
      actionType: 'url',
      url: 'https://www.google.com',
      position: 'relative'
    }
  }
]
