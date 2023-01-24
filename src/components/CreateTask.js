import React, { useState } from 'react';

function CreateTask({ onAdd }) {
  const [taskValue, setTaskValue] = useState('');

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskValue);
    setTaskValue('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center justify-center p-2 bg-teal-400 "
    >
      <div className="flex flex-wrap">
        {/* Label */}
        <label className="m-2 font-serif font-semibold">Task: </label>
        {/* input field */}
        <input
          type="text"
          autoFocus={true}
          value={taskValue}
          onChange={handleChange}
          placeholder="Enter Tasks Here..."
          className="m-2 border-none"
        />
      </div>
      <div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 px-4 border border-green-700 rounded">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default CreateTask;
