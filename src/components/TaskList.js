import React from 'react';

import Task from './Task';

function TaskList({ tasks, onDelete, onUpdate, onCompleted }) {
  const renderedTasks = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onCompleted={onCompleted}
      />
    );
  });

  return (
    <table className="w-4/5 mx-auto my-0">
      <thead style={{ backgroundColor: '#d6eeee' }}>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{renderedTasks}</tbody>
    </table>
  );
}

export default TaskList;
