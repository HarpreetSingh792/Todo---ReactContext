import React, { useState } from 'react'
import { useTodo } from '../context';

const TodoList = ({ todo }) => {
    const { deleteTodo, updateTodo, toggleComplete } = useTodo();
    const [isEditing, setIsEditing] = useState(false);
    const [updateValue, setUpdateValue] = useState("");
    const editHandler = () => {
        updateTodo(todo?.id, {...todo,todo:updateValue});
        
        setIsEditing((prev) => !prev);

    }
    const deleteHandler = () => {
        deleteTodo(todo.id);
    }
    const checkHandler = () => {
        toggleComplete(todo.id)
    }
    return (
        <div className={`w-full p-2 mt-7 rounded-md shadow-md shadow-blue-300/50 border border-green-400/50  text-blue-500 font-bold flex items-center justify-between ${todo?.isComplete ? "bg-green-100/50" : " bg-white"}`}>
            <div className='w-10/12 flex items-center'>
                <input onChange={checkHandler} className='ml-4 cursor-pointer' type='checkbox' checked={todo?.isComplete||false} ></input>
                {

                    !isEditing ? (<p className={`ml-4 ${todo?.isComplete ? "line-through decoration-red-600" : ""}`}>{todo.todo}</p>) :
                        (<input onChange={(e) => { setUpdateValue(e.target.value) }} type="text" className='ml-4 cursor-pointer outline-none border w-10/12 border-blue-300 h-8 p-3'></input>)
                }
            </div>
            <div className=' w-1/5 flex  items-center justify-around '>
                <button onClick={editHandler} className={`pr-2 pl-2 rounded-sm border cursor-pointer  transition-all ease-in  hover:text-white ${!isEditing ? "border-blue-400 text-blue-500 hover:bg-blue-500" : "border-green-400 text-green-500 hover:bg-green-500"}`}>{!isEditing ? "Edit" : "Save"}</button>
                <button onClick={deleteHandler} className='pr-2 pl-2 rounded-sm border cursor-pointer border-red-400 text-red-500 transition-all ease-in hover:bg-red-500 hover:text-white'>Delete</button>
            </div>
        </div>
    )
}

export default TodoList;