import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'タスク1',
      isCompleted: false
    },
    {
      id: 2,
      task: 'タスク2',
      isCompleted: false
    }
  ])

  const [task, setTask] = useState('');

  const onSubmit = (e) => {
    e.preventDefault() 
    const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
    const newTodo = { id: newId, task, isCompleted: false }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTask('') 
  }

  return (
    <div>
        <h1>Todoリスト</h1>

        <form onSubmit={onSubmit}>
            <label htmlFor='task'>やること：</label>
            <input
                type='text'
                id='task'
                name='task'
                value={task}
                onChange={(e) => {
                setTask(e.target.value)
                }}
            />
            <button type='submit'>
                追加
            </button>
        </form>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                <label>
                    <input type='checkbox' />
                    <span>{todo.task}</span>
                </label>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList