import React, { useState } from 'react';

function TaskEdit({ task, onSubmit }) {
  const [title, setTitle] = useState(task.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('cliked');
    onSubmit(task.id, title);
  };

  return (
    <tr>
      <td>
        <label className="m-2 font-serif font-medium">New Title: </label>
      </td>
      <td>
        <input
          type="text"
          autoFocus={true}
          value={title}
          onChange={handleChange}
          placeholder="Enter Tasks Here..."
          className="m-2 border-none"
        />
      </td>

      <td>
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 px-4 border border-green-700 rounded"
        >
          Save
        </button>
      </td>
    </tr>
  );
}

export default TaskEdit;
