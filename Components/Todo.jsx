import { useEffect, useRef, useState } from 'react'
import './Assets/CSS/Todo.css'
import Todoitems from './Todoitems';

let count = 0;

const Todo = () => {


     const [todos,setTodos] = useState([]);
     const inputRef = useRef(null);
     const add = () => {
          setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
          inputRef.current.value = "";
     }
     useEffect(()=>{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    },[]);

     useEffect(()=>{
      setTimeout(() => {
        console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos))
      }, 100);
     },[todos]);
 
  return (
    <div className='todo'>
         <div className="todo-header">Задачи</div>
         <div className="todo-add">
           <input ref={inputRef} type="text" placeholder='Введите задачу' className='todo-input' />
           <div onClick={()=>{add()}} className="todo-add-btn">Добавить</div>
         </div>
         <div className="todo-list">
          <p className="to">Список задач</p>
           {todos.map((item,index)=>{
                 return <Todoitems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>

           })}
         </div>
    </div>
  )
}

export default Todo