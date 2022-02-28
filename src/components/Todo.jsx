import React from 'react'

function Todo({item}) {
  return (
    <div>Todo
        <div>
            {
                item.map((items)=>{
                    return(
                        <p>{items.task}</p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Todo