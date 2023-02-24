import React, { useEffect, useState, useRef } from 'react'
import "../Styles/AddTodoForm.css";

// savedItems will retrive all the data from the local storage
const savedItems = localStorage.getItem("todos");

// will take all the saved items from the local storage in JSON formate
const getSavedItems = () => {
    // console.log("Saved Items :", savedItems);
    if (savedItems) {
        return JSON.parse(savedItems);
    }
    else
        return [];

}

const AddTodoForm = () => {

    const inputRef = useRef();

    // setting states of the inputs and Todos
    const [inputs, setInputs] = useState("");
    const [todos, setTodos] = useState(getSavedItems);

    // setting states for editing and updating the todo
    const [editForm, setEditForm] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})

    // Setting Items in local storage whenever the changes are made
    // re-renders todos state changes 
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        inputRef.current.focus();
    }, [inputRef, todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputs !== "") {
            setTodos([]);
        }
        else {
            alert("Please enter some data to the input field");
            return null;
        }

        // Setting id for each items in list
        let date = new Date();
        const time = date.getTime();

        setTodos([...todos,
        {
            id: time,
            text: inputs.trim()
        }]);
        setInputs("")
    }

    // Deleting Items from Local storage
    const handleDelete = (id) => {
        // console.log(id);
        const removeItem = todos.filter((todos) => todos.id !== id);
        setTodos(removeItem)
    }

    // Deleting all the Items from Local Storage
    const handleDeleteAll = () => {
        if (todos.length === 0) {
            alert("There is no item in the todo list")
        }
        else {
            setTodos([])
        }
        // console.log(savedItems);
    }


    // EDITING OF THE LIST

    // Editing a specific Todo from the list
    const handleEdit = (todo) => {
        setEditForm(true);
        setCurrentTodo({ ...todo })
        inputRef.current.focus();
        // console.log(currentTodo);
    }

    // Handling change of input of form while Edit is clicked
    const handleEditInputChange = (e) => {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        // console.log("Current todo items", currentTodo.id);

    }

    // Handling the Submit when Edit button is clicked
    const handleEditSubmit = (e) => {
        // console.log("handleEdit Submit Clicked");
        e.preventDefault();

        handleEditUpdate(currentTodo.id, currentTodo)
    }

    const handleEditUpdate = (id, updatedTodo) => {
        const updatedItem = todos.map((list) => {
            return list.id === id ? updatedTodo : list
        })
        setEditForm(false)
        setTodos(updatedItem)
    }


    return (
        <>
            {editForm ? (
                <div>
                    <h1>Edit Todo</h1>
                    <form action="" onSubmit={handleEditSubmit}>

                        <input type="text"
                            className="input-field"
                            ref={inputRef}
                            value={currentTodo.text}
                            onChange={handleEditInputChange}
                            placeholder="Add Todo here"
                        />
                        <button className="btn">Update</button>
                        <button className="btn" onClick={() => { setEditForm(false) }}>Cancel</button>
                    </form>
                </div>

            ) : (
                <div>

                    <h1>Todo List</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text"
                            className="input-field"
                            ref={inputRef}
                            onChange={(e) => setInputs(e.target.value)}
                            value={inputs}
                            placeholder="Add Todo here"
                        />
                        <button className="btn">Add</button>
                    </form>
                    {/* this button will delete all the  items from the local storage  */}
                    {/* it will set the todos to an empty array so this will call the useEffect to render when the state is changed */}
                    <div className="delete-list">
                        <button className="btn btn-delete" onClick={() => handleDeleteAll()}>delete all</button>
                    </div>
                </div>
            )}
            <div className="todo-list">

                <ul>
                    {todos.map((list) => (
                        <li key={list.id}>
                            <p>
                                {list.text}
                            </p>
                            <button className="btn" onClick={() => { handleEdit(list) }}>Edit</button>
                            <button className="btn btn-delete" onClick={() => { handleDelete(list.id) }}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AddTodoForm