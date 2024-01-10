import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Todos() {

    const [todos, setTodos] = useState([])

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        async function getTodos() {
            try {
                const res = await fetch(`http://localhost:4001/api/todos`)
                const data = await res.json()
                setTodos(data.tasks)
            } catch (error) {
                console.log(error)
            }
        }

        getTodos()
    }, [refresh])

    if (todos.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    async function deleteTodo(id) {
        try {
            const res = await fetch(`http://localhost:4001/api/deleteTodo/${id}`, {method: 'DELETE'})
    
            const data =  await res.json()
            console.log(data)
    
            if (!res.ok) {
                console.log('Failed to  delete')
            }

            setRefresh(true)
            
        } catch (error) {
            console.log(error)
        }
    }

    const todoElements = todos.map(item => (
        <div key={item._id} className="">
            <Link className="todo-link" to={item._id} >{item.task}</Link>
            <Link className="update-link" to={`/updateTodo/${item._id}`} >Update</Link>
            <button className="delete-todo" onClick={() => deleteTodo(item._id)}>Delete</button>
        </div>
    ))

    return (
        <div className="singleTodo-page">
            <h1>Your todos</h1>
            <div className="todos-parent">
                {todoElements}
            </div>
        </div>
    )
}