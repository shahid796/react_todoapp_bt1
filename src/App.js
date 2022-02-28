import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';
import { useState } from 'react';

function App() {
  const [todolist,settodolist]=useState([""])
  const addtask=(userinput)=>{
      let copy=[...todolist]
      copy=[...copy,{id:Date.now(),task:userinput,status:false}]
      settodolist(copy)
  }
  const handletogle=(id)=>{
     const updated_todo = todolist.map((item)=>{
       return item.id == id?{...item,status:!item.status}:{...item}
     })
     settodolist(updated_todo)
  }
  const handlefilter=()=>{
    let filteredtodo = todolist.filter((item)=>{
      return !item.status
    })
    settodolist(filteredtodo)
  }
  return (
  <div>
    <Head/>
    <Todoform Addtask={addtask}/>
    <Todolist Todolist={todolist} toggle={handletogle} filtered={handlefilter}></Todolist>
    </div>
  );
}

export default App;
