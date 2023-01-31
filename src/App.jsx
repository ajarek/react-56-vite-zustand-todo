import { useRef } from 'react'
import StoreTodo from './store/StoreTodo'
function App() {
  const { tasks, addTasks, toggleComplete, removeTask, saveTasks } = StoreTodo()
  const inputRef = useRef()

  const addTask = () => {
    if(inputRef.current.value){
    const newTask = {
      id: tasks.length,
      description: inputRef.current.value,
      completed: false,
    }
    addTasks(newTask)
    inputRef.current.value = ''
    saveTasks()
  }
  return
  }

  return (
    <div className='App'>
      <h4>Number of Tasks {tasks.length} </h4>
      <p>Add a New Task</p>
      <form>
      <input 
      ref={inputRef}
      placeholder={'text...'} 
      />
      <button onClick={addTask}>Add a Task</button>
      </form>
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
              onClick={() => {
                removeTask(index)
                saveTasks()
              }}
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>
      {/* <button onClick={saveTasks}>Save Tasks</button> */}
    </div>
  )
}

export default App
