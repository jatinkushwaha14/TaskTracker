import React from 'react'
import { Todo } from './model.ts'
import Singletodo from './singletodo.tsx'
import './List.css'
interface InputFieldProps {
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const List = ({todos,settodos}:InputFieldProps) => {
  return (
    <div className='alltodos'>
        {
            todos.map((todo)=>( 
                <Singletodo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    settodos={settodos}
                />
            ))
        }
    </div>
  )
}

export default List