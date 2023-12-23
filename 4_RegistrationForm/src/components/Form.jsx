import React, { useState } from "react";
import "./Form.css"; // Import the CSS file

function Form() {
  const formData = {name:"", email: "", password: ""}
  const [inputData, setInputData] = useState(formData)
  const [confirmation, setConfirmation] = useState(false)

  const handleInput = (e)=>{
    setInputData ({...inputData, [e.target.name] : e.target.value }) //  [e.target.name]. It's a way to dynamically set a property name in an object. Always in list format
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    if (!inputData.name || !inputData.email || !inputData.password){
      alert("All fields are mendatory!!!")
    }
   else{
    console.log(inputData);

    setConfirmation(true);
    setTimeout(()=>{
      setConfirmation(false)
    },2000)
   }

  }
  return (
    <>
       
       {confirmation &&<h1 className="confirmation">{ confirmation ? `Congrats!! ${inputData.name} your form is successfully submitted.` : "" }</h1> }
      <div className="registration-container" onSubmit={handleSubmit}>      
        <h2>Registration Form</h2>
        <form>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Name" value={inputData.name} onChange={handleInput}/>
            
          </div>

          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" value={inputData.email} onChange={handleInput}/>
          </div>

          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password" value={inputData.password} onChange={handleInput}/>
          </div>

          <button type="submit">Submit</button>
        </form>
        
      </div>
    </>
  );
}

export default Form;
