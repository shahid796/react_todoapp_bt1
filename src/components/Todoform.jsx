import React, { useState } from 'react'
import './Todoform.css'

function Todoform({Addtask}) {
    const[input,setinput]=useState("")
    const handlesumbit=()=>{
        Addtask(input)
        setinput("")
    }
  return (
    <div className='dd'>
        <input type="text" value={input} placeholder="enter your task" onChange={(e)=>{setinput(e.target.value)}} />
        <button onClick={handlesumbit}>add</button>
    </div>
  )
}

export default Todoform