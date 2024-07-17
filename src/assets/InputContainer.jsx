import React from 'react'

function InputContainer({inputVal , writeTask , addTask}) {
  return (
    <div className="input-container">
      <input type="text" placeholder='Enter the Task' value={inputVal} onChange={writeTask}/>
      <button onClick={addTask}>+</button>
    </div>
  )
}

export default InputContainer