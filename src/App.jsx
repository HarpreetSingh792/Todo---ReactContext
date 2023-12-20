import React, { useState,useEffect } from "react";
import { TodoProvider } from "./context"
import TodoForm from "./components/todoForm";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);
  const addTodo = (todo) => {
    let resTodo = {
      id: Date.now(),
      todo,
      isComplete: false
    }
    !list?setList(resTodo):setList((prev) => [...prev, resTodo]);
  }
  const deleteTodo = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  }
  const updateTodo = (id, todo) => {
    setList((prev) => prev.map((item) => {
      return item.id === id ? todo : item
    }))
  }
  const toggleComplete = (id) => {
    setList((prev) => prev.map((item) => item.id === id ? {...item,isComplete:!item.isComplete}:item))
  }

  // Get List to Local Storage
  useEffect(()=>{
    
       if(localStorage.getItem("list"))  setList(JSON.parse(localStorage.getItem("list")));
  },[])
  
  // Set List to Local Storage
  useEffect(()=>{
    if(list && list.length>0) localStorage.setItem("list",JSON.stringify(list));
  },[list])


  return (
    <div className="w-full h-screen bg-slate-50">
      < TodoProvider value={{ list, addTodo, deleteTodo, updateTodo, toggleComplete }}>
        <h1 className="w-full p-2 mt-3 text-4xl text-center font-extrabold font-mono text-blue-500">Todo List</h1>


        {/* Form to Add Todo's */}

        <TodoForm />
        {/* List To see all the added Todo's */}
        <div className=" flex flex-col-reverse m-auto mt-12  w-10/12 ">
        {
          list.map((item)=>{
            return   <TodoList todo={item} key={item.id}/>
          })
        }
        </div>

      </TodoProvider>
    </div>
  )
}

export default App
