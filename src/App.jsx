import { useRef, useState } from 'react'
import StoreTodo from './store/StoreTodo'
function App() {
  const {tasks,  addTasks, toggleComplete, removeTodo } = StoreTodo()
  const inputRef = useRef()

  const addTask = () => {
    const newTask = {
      id: tasks.length,
      description: inputRef.current.value,
      completed: false,
    }
    addTasks(newTask)
    inputRef.current.value = ''
    
  }
 const saveTasks=() => {
  const tasksAll = [...tasks];
    window.localStorage.setItem('tasks', JSON.stringify(tasksAll))
 }
  return (
    <div className='App'>
      <h4>Number of Tasks {tasks.length} </h4>
      <p>Add a New Task</p>
      <input ref={inputRef} />
      <button onClick={addTask}>Add a Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <span
              onClick={() => toggleComplete(index)}
              style={
                task.completed
                  ? { textDecoration: 'line-through' }
                  : { textDecoration: 'none' }
              }
            >
              {' '}
              {task.description}
            </span>

            <span
            onClick={() => removeTodo(index)}
            >🗑️</span>
          </li>
        ))}
      </ul>
      <button onClick={saveTasks}>Save Tasks</button>
    </div>
  )
}

export default App
