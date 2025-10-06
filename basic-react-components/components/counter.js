const { useState } = require('react');

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Click the button to increase or decrease count.</p>
            <p>Current Count: {count}</p>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <br></br>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    )
}