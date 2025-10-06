import React, { useState } from "react";

//Task 5

export default function Hover() {
  const [hover, setHover] = useState(true);
    const handleMouseOver = () => {
        setHover(false);
    };
    const handleMouseBye = () => {
        setHover(true);
    };

    return (
        <div>
        <p onMouseOver={handleMouseOver} onMouseOut={handleMouseBye}style={{color: hover? "blue" : "white"}}>Hover Fun!</p>
        </div>
    );
}
