import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
//   const data = ["work1", "work2", "work3"]
//   const data = ""
const [inputData, setInputData] = useState("")
const [todoItems, setTodoItems] = useState([])
const [isEditing, setIsEditing] = useState(false);
const [editIndex, setEditIndex] = useState(null); // so that we can get vals on this basis of index
const inputHandler =(e)=>{
                            setInputData (e.target.value)
                            console.log("item added")
                        }

// add task
function addTaskHandler(){
    // setTodoItems([...todoItems, inputData]) // adding new task to the existing task list. It will work asynchronoisly
        setTodoItems((todoItems)=> { // this will work synchronously
            const updatedList = [...todoItems, inputData]
            console.log("updateList: ", updatedList)
            return updatedList
        })
             
        console.log("task-added")
        setInputData("") // this will empty the input box  
       
        // for making add button to update button
        

    } 

// delete task
function rmvTask (ind){
        const updatedList = todoItems.filter((ele,index)=>{
            return index != ind
        })
        alert(" Task Deleted")
        console.log("updatedList: ", updatedList)
        setTodoItems(updatedList)       
}

// Edit Task:
function editTask(ind){
      setIsEditing(true)
      setEditIndex(ind)
      setInputData(todoItems[ind])
      console.log("edd: ", isEditing)
      console.log("ind: ", editIndex)
      // targetTask = todoItems[ind]
      // setInputData(targetTask)
      // setTodoItems((todoItems)=>{
      // console.log("eeeeeeeeeeeeddddddddddddddd")
      // })
}

  return (
    <>
    <div className="container">
        <div className="activity-addBtn">
            
            <input type="text" name="todo" id="inpBox" placeholder='Add your task' onChange={inputHandler} value={inputData}/>
            <button className='addBtn' onClick={addTaskHandler}>Add</button>

        </div>

        {todoItems.length===0? <h1>No Todos</h1> : <h2 className='todosListInfo'>Your Todos</h2>}
            {/* condition rendering.  */}
            {todoItems.length != 0 &&           
                <div className='data'>           
                        {
                            todoItems.map(
                                (ele, ind) =>( // see below about map() fun
                                    // imlicit return ies here
                                    <>
                                    <div className="dataContainer">
                                            <li key={ind} className='todos'> {`task- ${ind+1} : `}  {ele}  </li>
                                            <div className="rmvEditBtn">
                                                    <button onClick={()=>{rmvTask(ind)}} className='rmvBtn'>Remove</button>
                                                    <button onClick={()=>{editTask(ind)}} className='editBtn'>Edit</button>
                                            </div>
                                    </div>
                                    </>
                            )                                                                                                                                 
                                
                            )
                        }
                    
                </div>
            }

    </div>
    
    </>
  )
}

export default TodoList


/*
The issue is with the placement of the return statement inside the map function. When you use curly braces {}, you need to explicitly 
return the value. However, if you use parentheses () instead of curly braces, the return is implicit.

In your code, the return statement is on a new line after the map function, and because of automatic semicolon 
insertion in JavaScript, it is interpreted as if you have written:

code:
return; // This line returns undefined
<>
  <li key={ind} className='todo'> {`task- ${ind+1} : `}  {ele}  </li>
</>

As a result, the li element is not being returned along with the key and className attributes. To fix this, you can either remove 
the newline after return or use parentheses instead of curly braces. Here's the corrected code using parentheses:

code:
<div className='data'>           
  {todoItems.map((ele, ind) => (
    <React.Fragment key={ind}>
      <li className='todo'>{`task- ${ind + 1} : `}{ele}</li>
    </React.Fragment>
  ))}
</div>


This way, the return is implicit due to the parentheses, and the li element is correctly included in the 
map function's result. Also, note the use of React.Fragment to wrap the JSX elements, as it avoids adding unnecessary HTML elements to the DOM.



*/