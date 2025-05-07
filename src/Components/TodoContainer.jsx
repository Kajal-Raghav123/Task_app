import React from "react";
import Todo from "./Todo";

function TodoContainer({todos,deltodo}) {
  return (
   <>
   <div className="container">
      {todos.map((todo,index) => {
       return(
        <Todo key={todo} index = {index} todo={todo} deltodo = {deltodo} />
       )
      })}
    </div>
   </>
  );
}

export default TodoContainer;
