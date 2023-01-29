import { create } from 'zustand'

const StoreTodo = create((set) => ({
  tasks: [
    { id: '0', description: 'Umyć okna', completed: false },
    { id: '1', description: 'Zrobić Zakupy', completed: true },
  ],
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
    removeTodo: (index) => set(state => ({
      tasks: state.tasks.filter((_, i) => i !== index)
  })),
//   saveTasks: () => {
   
//     set((state) => {
//     const tasksAll = [...state.tasks];
//     window.localStorage.setItem('tasks', JSON.stringify(tasksAll))
//     })
  
// },
// loadTasks: () => {
//     const tasks = window.localStorage.getItem('tasks');
//     if (tasks) {
//         set(state => ({ tasks: JSON.parse(tasks) }));
//     }
// }
}))

export default StoreTodo
