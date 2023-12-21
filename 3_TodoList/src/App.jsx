import Title from "./components/Title"
import TodoList from "./components/TodoList"


function App() {
  return (
    <>

      { /* inline css  */}
     {/* <h1 style={{color:"red"}}>Hello TODO </h1>  */}
     <h1>Hello TODO </h1>
     {/* here will call each components */}
      <Title />
      <TodoList />
    </>
  )
}

export default App
