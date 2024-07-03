interface TodoInputInterface {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addFunct: (e:React.FormEvent) => void
}

const TodoInput: React.FC<TodoInputInterface> = ({ todo, setTodo, addFunct }) => {
    return (
        <form onSubmit={e => addFunct(e)}>
            <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="todo yaz ..." />
            <button type="submit">Ekle</button>
        </form>
    )
}

export default TodoInput