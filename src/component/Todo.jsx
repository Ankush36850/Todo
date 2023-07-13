import React, { useState } from 'react'
import '../style.css'
import { useSelector,useDispatch } from 'react-redux'


const Todo = () => {
    const [task,setTask] = useState("")
    const dispatch = useDispatch()
    const list = useSelector(state => state)
  return (
    <div className="main">
      <h1>To-Do</h1>
        <div>
          <input type="text" onChange={e => setTask(e.target.value)} className="task-input" />
          <button className="btn" onClick={() => dispatch({type:'ADD', payload:task})}>ADD</button>
        </div>
      <ul>
      {
        list.map((value, index) =>(
          <li className="list-item" key={index}>
            <p className="task">{value}</p>
            <button className="btn" onClick={() => dispatch({type:'REMOVE',payload:index})}>Delete</button>
          </li>
        ) )
      }
      </ul>
      
    </div>
  )
}

export default Todo