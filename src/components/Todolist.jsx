import React from 'react'
import Todo from './Todo'
import './todolist.css'

function Todolist({Todolist,toggle,filtered}) {
    const handlesubmit=(e)=>{
       toggle(e.currentTarget.id)
    }
  return (
    <div>
        <h3>
            items
        </h3>
        {
          Todolist.map((item)=>{
              return(
                  
                  <p onClick={handlesubmit} className={item.status?"strike":"no_strike"} id={item.id}>{item.task}</p>
                 

              )
          })  
        }
        <div>
            <button onClick={filtered} >delete completed task</button>
        </div>
    </div>
  )
}

export default Todolist