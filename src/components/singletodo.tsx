import React, { useEffect, useRef } from 'react'
import { Todo } from './model.ts'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './singletodo.css'
type Props={
    todo: Todo;
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Singletodo = ({todo,todos,settodos}:Props) => {
    const [edit,setedit]=React.useState<boolean>(false)
    const [settodo,settodoedit]=React.useState<string>(todo.todo)
    const handledone=(id:number)=>{
        settodos(todos.map((todo)=>todo.id===id?{...todo,isCompleted:!todo.isCompleted}:todo))
    }
    const handledelete=(id:number)=>{
        settodos(todos.filter((todo)=>todo.id!==id))
    }
    const handleedit=(e:any,id:number)=>{
        e.preventDefault()
        settodos(todos.map((todo)=>todo.id===id?{...todo,todo:settodo}:todo))
        setedit(!edit)
    }
    const inputref=useRef<HTMLInputElement>(null)   
    useEffect(()=>{
        inputref.current?.focus()
    },[edit]) 
    return (
        <form className="singletodo" action=""onSubmit={(e)=>handleedit(e,todo.id)}>
            {
                edit?(
                    <input ref={inputref} value={settodo}  onChange={(e)=>settodoedit(e.target.value)} className='onchange'/>
                ):(
                    todo.todo ? (
                        todo.isCompleted ? (
                            <s className="completed">{settodo}</s>
                        ) : (
                            <span>{settodo}</span>
                        )
                    ) : (
                        <span>No task available</span>
                    )
                )
            }
            
            
            <div>
                <span onClick={()=>{

                    if(!edit && !todo.isCompleted){
                        setedit(!edit)
                    }
                    if(edit){
                        setedit(!edit)
                    }
                }
                }>
                    <AiFillEdit/>
                </span>
                <span onClick={()=>handledelete(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span onClick={()=>handledone(todo.id)}>
                    <MdDone/>
                </span>

            </div>
        </form>
    )
}

export default Singletodo;