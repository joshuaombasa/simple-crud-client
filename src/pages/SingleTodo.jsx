import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleTodo() {

    const [todo, setTodo] = useState(null)

    const params = useParams()

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
    },[])

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
        </div>
    )
}