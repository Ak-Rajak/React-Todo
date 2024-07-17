import React from 'react'

function Todo({task, index, deleteTodo}) {
  return (
    <div className="todo">
        <p>{task}</p>
        <div className="actions">
          <input type="checkbox" />
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    </div>
  )
}

export default Todo