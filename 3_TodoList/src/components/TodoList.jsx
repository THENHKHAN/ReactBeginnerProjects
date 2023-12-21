import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
//   const data = ["work1", "work2", "work3"]
//   const data = ""
const [inputData, setInputData] = useState("")
const [todoItems, setTodoItems] = useState([])
const inputHandler =(e)=>{
    setInputData (e.target.value)
    console.log("item added")
}
function addTaskHandler(e){
    setTodoItems([...todoItems, inputData]) // adding new task to the existing task list
    console.log("task-added")
    setInputData("")
}
  return (
    <>
    <div className="container">
        <div className="activity-addBtn">
            
            <input type="text" name="todo" id="inpBox" placeholder='Add your task' onChange={inputHandler} value={inputData}/>
            <button className='addBtn' onClick={addTaskHandler}>Add</button>

        </div>

        {todoItems.length===0? <h1>No Todos</h1> : <p>Your todos</p>}
            {/* condition rendering.  */}
            {todoItems.length != 0 &&           
                <ul>            
                        {
                            todoItems.map(
                                (ele, ind) =>(
                                    <li key={ind}> {`task- ${ind} : `}  {ele}
                                        
                                    </li>   
                                )
                            )
                        }
                    
                </ul>
            }

    </div>
    
    </>
  )
}

export default TodoList