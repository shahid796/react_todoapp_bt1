import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Todoform from './components/Todoform';
import { useState } from 'react';

function App() {
  const [todolist,settodolist]=useState([])
  const addtask=(userinput)=>{
      let copy=[...todolist]
      copy=[...copy,{id:Date.now(),task:userinput,status:false}]
      settodolist(copy)
  }
  return (
  <div>
    <Head/>
    <Todoform Addtask={addtask}/>
    </div>
  );
}

export default App;
