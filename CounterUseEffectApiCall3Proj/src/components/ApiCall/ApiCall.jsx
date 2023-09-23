import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ApiCall.css";

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json())
// .then(json => console.log(json))

const ApiCall = () => {
  // JS way :
  // async function api() {
  //   const resp = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  //   let data = await resp.json();
  //   console.log(data);
  // }

  // const [body, setBody] = useState([]);
  const [title, setTitle] = useState([]);

  /*HOW TO USE AXIOS with useEffect.
useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
*/

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data[0].title); // data is the filed or key in which id,title,desc are there.
        setTitle(res.data);
      })
      .catch((err) => {
        console.log("ERROR");
      });
  }, []); // [] list so that response come only once and not infinite

  return (
    <div className="container3">
      <span>
        Looking for API of Todo-List using(axios,useState,useEffect)..
      </span>
      <br />
      <h2>All The Title will display below..</h2>
      {/* <input type="number" className="inputValue" /> */}
      {/* <button onClick={() => api()}></button> */}

      {/* we need all data here: */}
      <div>
        <ul>
          {/* here title : it is the state variable which have list of objects from useEffect.Since it load when page load. */}
          {title.map((tt) => {
            return (
              <>
                <li key={tt.id}>
                  <span>title:</span> {tt.title}{" "}
                  {/* it will display all the titles */}
                </li>
                {/* // key: it is a keyword used to get uniqueRecord */}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ApiCall;
