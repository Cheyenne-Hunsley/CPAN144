import React, { useState } from "react";

//Task 2

export default function ShowButton(){
  const [count, setCount] = useState("Show Message");
  const [button, setShow] = useState("");
    const handleClick = () => {
    setCount(count == "Show Message" ? "Hide Message" : "Show Message");
    setShow(button == "Surprise!" ? "" : "Surprise!");
    }
    return (
    <div>
        <p>{button}</p>
      <button onClick={handleClick}>{count}</button>
      
    </div>
    )
};