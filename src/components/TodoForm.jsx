import React, { useState } from 'react'
import {useTodo} from "../context"
const TodoForm = () => {
    const[value,setValue]=useState("");
    const {addTodo} = useTodo(); 
    const changeHandler = (e)=>{
        setValue(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        if(value)
        {
            addTodo(value);
            setValue("");
        }
    }
  return (
    <form onSubmit={submitHandler} className='w-10/12 flex items-center justify-between  mt-16 m-auto'>
        <input type='text' value={value} onChange={changeHandler} className="outline-none border w-10/12 border-blue-300 h-8 p-3"/>
        <input type='submit' className='ml-3 h-8 w-1/5 rounded-sm border cursor-pointer border-red-400 text-red-500 transition-all ease-in hover:bg-red-500 hover:text-white' />
    </form>
  )
}

export default TodoForm;