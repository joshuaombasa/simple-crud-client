import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateTodo() {

    const [formData, setFormData] = useState({
        task: '',
        description: ''
    })

    const [refresh, setRefresh] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

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
                    setFormData({task: data.task, description: data.description})
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTodo()
    },[refresh])

    if (!todo) {
        return (
            <h1>Loading...</h1>
        )
    }


    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`http://localhost:4001/api/updateTodo/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (!res.ok) {
                console.log('An error occured')
            } else {
                const data = await res.json()
                setFormData({task: '', description: ''})
                setRefresh(true)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="updateTodo-page">
            <h1>Edit your  todo:</h1>
            <form onSubmit={handleSubmit} className="addTodo-form">
                <div className="form-item">
                    <label htmlFor="task">Task</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={formData.task}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        rows={5}
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}