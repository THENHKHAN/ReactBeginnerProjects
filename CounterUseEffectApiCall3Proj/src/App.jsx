import React from "react";
import CounterApp from "./components/CounterApp/CounterApp";
import UseEffectHook from "./components/UseEffectHook/UseEffectHook";
import ApiCall from "./components/ApiCall/ApiCall";

function App() {
  return (
    <>
      <CounterApp />
      <UseEffectHook />
      <ApiCall />
    </>
  );
}

export default App;
