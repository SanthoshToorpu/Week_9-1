import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://sum-server.100xdevs.com/todos`)
        .then((res) => {
            setTodos(res.data.todos)
            setLoading(false)
        })
        }, 1000)
    }, [])
    return {
        todos : todos,
        loading : loading
    };
}

const Datafetching = () => {
  const {todos, loading} = useTodos();
  if (loading){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )}
    return(
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                </div>
            ))}
        </>
    )
  
}

export default Datafetching
