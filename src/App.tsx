import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/model'
import List from './components/List'

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);
  const [completedtodos, setcompletedtodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const newTodo: Todo = {
        id: new Date().getTime(),
        todo: todo,
        isCompleted: false
      }
      settodos([...todos, newTodo]);
      settodo("");
    }
  };

  return (
    <div>
      <div className="heading"><h1>Taskify</h1></div>
      <InputField todo={todo} settodo={settodo} handleSubmit={handleSubmit} />
      <List todos={todos} settodos={settodos} completedtodos={completedtodos} setcompletedtodos={setcompletedtodos} />
    </div>
  )
}

export default App;