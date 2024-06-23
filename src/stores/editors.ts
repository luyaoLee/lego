import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

export interface ComponentData {
  props: { [key: string]: any }
  id: string
  name: string
}

export const useEditorsStore = defineStore('editors', () => {
  const components = ref<ComponentData[]>(testComponents)

  function addComponent(component: ComponentData) {
    components.value.push(component)
  }
  return { components, addComponent }
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
