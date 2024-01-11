import React, { useEffect, useState } from "react";
import { Link, useParams,redirect, useNavigate } from "react-router-dom";

export default function SingleTodo() {

    const [todo, setTodo] = useState(null)

    const params = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        async function getTodo() {
            try {
                const res = await fetch(`http://localhost:4001/api/todos/${params.id}`)
                if (!res.ok) {
                    console.log('An error occured')
                } else {
                    const data = await res.json()
                    console.log(data)
                    setTodo(data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTodo()
    }, [])

    async function deleteTodo(id) {
        try {
            const res = await fetch(`http://localhost:4001/api/deleteTodo/${id}`, {method: 'DELETE'})
    
            const data =  await res.json()
            console.log(data)
            navigate('/')
    
            if (!res.ok) {
                console.log('Failed to  delete')
            }

            // setRefresh(true)
            
        } catch (error) {
            console.log(error)
        }
    }

    if (!todo) {
        return (
            <h1>Loading...</h1>
        )
    }



    return (
        <div className="singleTodo-page">
            <Link
                to=".."
                relative="path"
            > &larr; Back to all todos</Link>
            <h3>{todo.task}</h3>
            <p>{todo.description}</p>
            <Link className="update-link" to={`/updateTodo/${todo._id}`} >Update</Link>
            <button className="delete-todo" onClick={() => deleteTodo(todo._id)}>Delete</button>
        </div>
    )
}