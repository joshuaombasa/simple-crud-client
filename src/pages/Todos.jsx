import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Todos() {

    const [todos, setTodos] = useState([])

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
    }, [])

    if (todos.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    const todoElements = todos.map(item => (
        <Link to={item._id} key={item._id}>{item.task}</Link>
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