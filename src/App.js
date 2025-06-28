import React, { useState, useEffect } from 'react';

function App() {
  // 初期値としてローカルストレージからデータを取得
  const [tasks, setTasks] = useState(() => {
    const temp = localStorage.getItem("keepTodo");
    try {
      const loaded = JSON.parse(temp);
      return Array.isArray(loaded) ? loaded : [];
    } catch {
      return [];
    }
  });

  const [task, setTask] = useState('');
  const [sortOrder, setSortOrder] = useState('incompleteFirst');
  const [isSortEnabled, setIsSortEnabled] = useState(true);

  // tasksが変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem("keepTodo", JSON.stringify(tasks));
  }, [tasks]);

  // 新しいタスクを追加
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, isCompleted: false }]);
      setTask('');
    }
  };

  // タスクの完了状態を切り替え
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // タスクを削除
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 並べ順の変更
  const toggleSortOrder = () => {
    setSortOrder(prev => 
      prev === 'incompleteFirst' ? 'completeFirst' : 'incompleteFirst'
    );
  };

  const toggleSortEnabled = () => {
    setIsSortEnabled(prev => !prev);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === 'incompleteFirst') {
      return a.isCompleted - b.isCompleted;
    } else {
      return b.isCompleted - a.isCompleted;
    }
  });

  const displayTasks = isSortEnabled ? sortedTasks : tasks;

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

      <br /><br />
      <button onClick={toggleSortOrder}>
        並び順: {sortOrder === 'incompleteFirst' ? '未完了が上' : '完了が上'}
      </button>
      <button onClick={toggleSortEnabled}>
        並び替え: {isSortEnabled ? '有効' : '無効'}
      </button>
      
      <ul>
        {displayTasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => deleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
