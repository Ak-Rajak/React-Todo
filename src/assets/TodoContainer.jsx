import React from 'react'
import Todo from './Todo'

function TodoContainer({taskVal , deleteTodo}) {
  return (
    <div className="container">
        {taskVal.map((task, index) => (
            <Todo task={task} index={index} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}

export default TodoContainer