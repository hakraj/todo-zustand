import React, { useState } from 'react';
import useTaskStore from '../store/task';

const AddTaskForm = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [newTask, setNewTask] = useState("");

  const handleTaskSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    addTask({
      id: Math.ceil(Math.random() * 1000000),
      task: newTask
    })
    setNewTask("")
  }

  return (
    <form onSubmit={handleTaskSubmit} className='item submit'>
      <input
        required
        type="text"
        value={newTask}
        onChange={(e) => { setNewTask(e.target.value) }}
        placeholder="add new item"
        autoComplete="off" />
      <button type="submit">+</button>
    </form>
  )
};

export default AddTaskForm; 