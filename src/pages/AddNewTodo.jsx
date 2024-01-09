import React, { useState } from "react";

export default function AddNewTodo() {

    const [formData, setFormData] = useState({
        task: '',
        description: ''
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch('http://localhost:4001/api/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (!res.ok) {
                console.log('An error occured')
            } else {
                const data = await res.json()
                console.log(data)
                setFormData({task: '', description: ''})
            }

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className="addNewTodo-page">
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