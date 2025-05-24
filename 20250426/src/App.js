import React, { useState , useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    const temp = JSON.stringify(tasks);
    localStorage.setItem("keepTodo", temp);
  }, [tasks]);

  useEffect(() => {
    const temp = localStorage.getItem("keepTodo");
    const loadedTodo = JSON.parse(temp);
    if (loadedTodo) {
      setTasks(loadedTodo);
    }
  }, []);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>ToDoリスト</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>追加</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTaskCompletion(task.id)}
              className="task-checkbox"
            />

            {task.text}
            
            <button onClick={() => deleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;