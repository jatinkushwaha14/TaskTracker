import React from 'react'
import { Todo } from './model'
import Singletodo from './singletodo'
import './List.css'

interface InputFieldProps {
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedtodos: Todo[];
    setcompletedtodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const List = ({ todos, settodos, completedtodos, setcompletedtodos }: InputFieldProps) => {
    return (
        <div className='container'>
            <div className="activetodo">
                <h2>Active todos</h2>
                {todos.map((todo) =>
                    !todo.isCompleted ? (
                        <Singletodo
                            key={todo.id}
                            todo={todo}
                            todos={todos}
                            settodos={settodos}
                            setcompletedtodos={setcompletedtodos}
                        />
                    ) : null
                )}
            </div>

            <div className="completedtodo">
                <h2>Completed todos</h2>
                {completedtodos.map((todo) =>
                    todo.isCompleted ? (
                        <Singletodo
                            key={todo.id}
                            todo={todo}
                            todos={completedtodos}
                            settodos={setcompletedtodos}
                            setcompletedtodos={setcompletedtodos}
                        />
                    ) : null
                )}
            </div>
        </div>
    )
}

export default List;