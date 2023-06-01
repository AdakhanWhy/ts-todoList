import { useState } from "react"

const Todolist: React.FC = (): JSX.Element =>{

    interface Itodo {
        id: number,
        text: string,
        completed: boolean
    }

    const [todos, setTodos] = useState<Itodo[]>([]);

    const [input, setInput] = useState<string>('');

    const handleToggle = (id: number) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        )
    }

    const handleClick = () => {
        const newTodo: Itodo = {
            id: Date.now(),
            text: input,
            completed: false,
        }
        setTodos(
            [...todos, newTodo]
        )
    }

    return(
        <div className="main">
            <h1>Todo List</h1>

            <ul>
                {todos.map(item => (
                    <li 
                    key={item.id} 
                    onClick={() => handleToggle(item.id)}
                    style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                        {item.text}
                    </li>
                ))}
            </ul>

            <input type="text" placeholder="new todo" onChange={(e) => setInput(e.target.value)} />

            <button onClick={handleClick}>add todo</button>
        </div>
    )
}

export {Todolist}