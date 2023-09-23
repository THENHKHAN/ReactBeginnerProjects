import React, { useState, useEffect } from "react";

import "./UseEffectHook.css";

const UseEffectHook = () => {
  const [showEffect, showEffectSet] = useState(0);
  const [showEffect2, showEffectSet2] = useState(0);

  useEffect(() => {
    console.log("inside useEffect Hook");
  }, [showEffect]);
  //  Here i have used a dependency show the callback function only render when showEffect variable will chnages.
  //  we can also write multiple variable in the list.So callback will only run when mention vriable state will change
  // And if nothing mention in the list thnen only 1st time render because of page load.
  // and if we ommit the 2nd arg then it will execute every time whenver anything chnage of this component.
  /*
Conclusion: Here we mention showEffect so callback only render when this state variable will change.
 */
  // everything is same for both the butttons except what we have used in useEffect hook.That's why it behaving differently.
  return (
    <div className="container2">
      <span>useEffect Learning</span>
      <div className="row">
        <div className="displayEffect">{showEffect}</div>
        <div className="btns">
          <button
            className="showUseEffect"
            onClick={() => showEffectSet(showEffect + 1)}
          >
            showUseEffect
          </button>
          <button
            className="NotUseEffect"
            onClick={() => showEffectSet2(showEffect2 + 1)}
          >
            NotUseEffect
          </button>
        </div>

        <span className="note">Note: </span>
        <p>
          Here number will show the useEffect hook power. showUseEffect will
          show will chnage the number while NotUseEffect will show not effect.
        </p>
      </div>
    </div>
  );
};

export default UseEffectHook;
