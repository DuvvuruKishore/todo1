import React,{useState} from 'react';
import EdiText from 'react-editext'


function App() {
const [text,setText]=useState("");
const [todo,setTodo]=useState([]);

const addTodo=(e)=>{


const taskDetails={
  id:Math.floor(Math.random() * 1000),
  name:text
}
setTodo([...todo,taskDetails]);
}

const deleteItem=(e,id)=>{
  e.preventDefault();
  setTodo(todo.filter((t)=>t.id!==id))
}

  return (
    <div>
    <form>
      <h1>Todo list</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={(e)=>addTodo(e)}>Add</button>
      </form>
      {todo.map((t)=>(
        <div key={t.id}>
      <li>{t.name}</li>
      <button onClick={(e)=>deleteItem(e,t.id)}>delete</button>
        </div>
      ))}
      

    </div>
  )
}

export default App
