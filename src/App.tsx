import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoRes from './components/TodoRes'
import { ITypes } from './types/ITypes';

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<ITypes[]>([])

  const addFunct = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.length > 0) {
      setTodos(prev => ([...prev, { todo: todo, id: todos.length + 1, isColor: false }]))
      setTodo('')
    }
  }

  return (
    < div >
      <TodoInput addFunct={addFunct} todo={todo} setTodo={setTodo} />
      <TodoRes todos={todos} setTodos={setTodos} />
    </div >
  )
}

export default App
