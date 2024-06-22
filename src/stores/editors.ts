import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

interface ComponentData {
  props: { [key: string]: any }
  id: string
  name: string
}

export const useEditorsStore = defineStore('editors', () => {
  const componets = ref<ComponentData[]>(testComponents)
  return { componets }
})

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello World1', fontSize: '12px' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello World2' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'Hello World3' } }
]
