import React, { useState } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { MdTaskAlt } from 'react-icons/md';
import TaskEdit from './TaskEdit';

function Task({ task, onDelete, onUpdate, onCompleted }) {
  const [showEdit, setShowEdit] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
    console.log(showEdit);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onUpdate(id, newTitle);
  };

  let content = (
    <tr>
      <td className={completed ? 'line-through opacity-50' : ''}>
        <MdTaskAlt className="m-2" />
      </td>
      <td
        className={completed ? 'line-through opacity-50' : ''}
        onClick={() => setCompleted(!completed)}
      >
        {task.title}
      </td>
      <td>
        <RiDeleteBack2Line
          onClick={() => handleDelete(task.id)}
          className="m-2"
        />
      </td>
      <td>
        <GrEdit onClick={handleEditClick} className="m-2" />
      </td>
    </tr>
  );

  if (showEdit) {
    console.log(task.id);
    content = <TaskEdit task={task} onSubmit={handleSubmit} />;
  }

  return <>{content}</>;
}

export default Task;
