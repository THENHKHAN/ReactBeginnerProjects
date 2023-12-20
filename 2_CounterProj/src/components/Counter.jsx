// import css from "./Counter.css"
// import css from "./Counter.css?inline";
import { useState } from 'react'
import './Counter.css'


const Counter = () => {
  const [counter, setCounter] = useState(0)


  return (
    <>
        <h2 >Counter App in REACT By <br /> <span>NHKHAN</span> </h2> 
        <h3>Counter : {counter}</h3> 
        <div className='counter-container'>
                
            <button className='incr' onClick={()=>setCounter(counter+1)}>Increment</button>
            <button className='decr' onClick={()=>setCounter(counter-1)}>Decrement</button>
            <button className='reset' onClick={()=>setCounter(0)}>Reset</button>
                
        </div>
      
    </>
  )
}

export default Counter
