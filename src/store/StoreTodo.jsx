import { create } from 'zustand'

const StoreTodo = create((set) => ({
  tasks: JSON.parse(window.localStorage.getItem('tasks')) || [],
  addTasks: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }))
  },
  toggleComplete: (index) =>
    set((state) => {
      const updatedTasks = [...state.tasks]
      updatedTasks[index].completed = !updatedTasks[index].completed
      return { tasks: updatedTasks }
    }),
  removeTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),
  saveTasks: () => {
    set((state) => {
      window.localStorage.setItem('tasks', JSON.stringify(state.tasks))
      return { state }
    })
  },
}))

export default StoreTodo
