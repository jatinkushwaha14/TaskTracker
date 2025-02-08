import React, { useEffect, useRef } from 'react'
import { Todo } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './singletodo.css'

type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedtodos: Todo[];
    setcompletedtodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Singletodo = ({ index, todo, todos, settodos, completedtodos, setcompletedtodos }: Props) => {
    const [edit, setEdit] = React.useState<boolean>(false);
    const [settodo, settodoedit] = React.useState<string>(todo.todo);

    const handledone = (id: number) => {
        const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
        settodos(updatedTodos);
        const completed = updatedTodos.filter((todo) => todo.isCompleted);
        const active = updatedTodos.filter((todo) => !todo.isCompleted);
        settodos(active);
        setcompletedtodos(completed);
    }

    const handledelete = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        settodos(updatedTodos);
        const completed = updatedTodos.filter((todo) => todo.isCompleted);
        const active = updatedTodos.filter((todo) => !todo.isCompleted);
        settodos(active);
        setcompletedtodos(completed);
    }

    const handleedit = (e: any, id: number) => {
        e.preventDefault();
        settodos(todos.map((todo) => todo.id === id ? { ...todo, todo: settodo } : todo));
        setEdit(!edit);
    }

    const inputref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputref.current?.focus();
    }, [edit]);

    return (
        <form
            className="singletodo"
            onSubmit={(e) => handleedit(e, todo.id)}
        >
            {edit ? (
                <input ref={inputref} value={settodo} onChange={(e) => settodoedit(e.target.value)} className='onchange' />
            ) : (
                todo.isCompleted ? <s className="completed">{settodo}</s> : <span>{settodo}</span>
            )}

            <div>
                <span onClick={() => !edit && !todo.isCompleted && setEdit(!edit)}>
                    <AiFillEdit />
                </span>
                <span onClick={() => handledelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span onClick={() => handledone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default Singletodo;