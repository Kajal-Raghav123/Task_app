import React, {useState} from "react"
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TodoContainer from "./Components/TodoContainer";
function App() {
  const [inputVal,setInputVal] = useState("");
  const [todos,settodos] = useState([]);
  function writetodo(e){
    setInputVal(e.target.value);
  }
  function addtodo(){
    if(inputVal !== ""){
      settodos((prevtodos)=>[...prevtodos,inputVal])
      setInputVal("");
    }
  }
  function deltodo(todoIndex){
    settodos((prevtodos)=>prevtodos.filter((prevtodos,prevtodoIndex)=>{
      return prevtodoIndex!= todoIndex
    }))
  }
  return (
   <>
    <h1>To do List</h1>
    <InputContainer inputVal={inputVal} writetodo={writetodo} addtodo={addtodo} />
    <TodoContainer todos = {todos} deltodo = {deltodo}/>
   </>
  )
}

export default App
