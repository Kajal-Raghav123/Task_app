import React from 'react'

function Todo({todo,index,deltodo}) {
  return (
    <>
    <div className="todo">
      
       <input className='checkin' type="checkbox" />
       
        <p className='do-list'>{(todo)}</p>
        <div className="actions">
         <button >update</button>
          <button onClick={()=>deltodo(index)}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Todo
