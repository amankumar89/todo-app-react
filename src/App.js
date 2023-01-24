import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    setItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTasksToItem = async (task) => {
    if (task.length === 0) {
      alert('Enter Valid Tasks');
      return;
    }

    await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      userId: 1,
      title: task,
      completed: false,
    });

    const updatedItems = [
      { id: items.length + 1, userId: 1, title: task, completed: false },
      ...items,
    ];

    setItems(updatedItems);
  };

  const deleteTasksToItem = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });

    setItems(updatedItems);
  };

  const updateTasksToItem = async (id, newTitle) => {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        title: newTitle,
      }
    );

    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }

      return item;
    });

    setItems(updatedItems);
  };

  const handleComplete = (id) => {
    console.log(id);
  };

  return (
    <div className=" bg-teal-50">
      <Navbar />
      <CreateTask onAdd={addTasksToItem} />
      <TaskList
        tasks={items}
        onDelete={deleteTasksToItem}
        onUpdate={updateTasksToItem}
        onCompleted={handleComplete}
      />
    </div>
  );
};

export default App;
