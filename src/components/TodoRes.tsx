import { ITypes } from "../types/ITypes"

interface TodoResProps {
    todos: ITypes[],
    setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>

}
const TodoRes: React.FC<TodoResProps> = ({ todos, setTodos }) => {
    const deleteFunc = (id: number) => {
        setTodos(todos.filter(todo => todo.id != id))
    }
    const updateFunc = (id: number) => {
        setTodos(todos.map(td => (td.id === id ? { ...td, isColor: !td.isColor } : td)))
    }
return (
    <div>
        {
            todos && todos.map((todo, i) => (
                <div className={`${todo.isColor ? "color": ""}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "250px", height: "40px", margin: "10px", padding: "5px", backgroundColor: "green", borderRadius: "5px" }} key={i}>
                    <div>{todo.todo}</div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <span onClick={() => deleteFunc(todo.id)} > Sil</span>
                        <span onClick={() => updateFunc(todo.id)}>Renklendir</span>
                    </div>
                </div>
            ))
        }
    </div >
)
}

export default TodoRes