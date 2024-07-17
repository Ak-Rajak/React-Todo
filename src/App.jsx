import { useState } from 'react'
import InputContainer from './assets/InputContainer';
import TodoContainer from "./assets/TodoContainer";
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState("");
  const [taskVal, setTaskVal] = useState([]);

  function writeTask(e) {
    setInputVal(e.target.value);
  }

  function addTask() {
    if (inputVal != "") {
      setTaskVal((prevtask) => [...prevtask, inputVal]);
      setInputVal("");
    }
  }

  function deleteTodo(taskIndex){
    setTaskVal((prevtask) => prevtask.filter((task , prevTaskIndex) => {
      return prevTaskIndex != taskIndex;
    }))
  }


  return (
    <>
      <main>
        <h1>To Do List</h1>

        <InputContainer
          inputVal={inputVal}
          writeTask={writeTask}
          addTask={addTask}
        />

        <TodoContainer taskVal={taskVal} deleteTodo={deleteTodo}/>
      </main>
    </>
  );

}

export default App
