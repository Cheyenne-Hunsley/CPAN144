import React, { useState } from "react";
//Task 3

export default function Submission() {
    const [message, setMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const Submit = (event) => {
    event.preventDefault();
    if(inputValue.trim()==''){
        setMessage('Incorrect Submission, Please try again.');
    }
    else{
        setMessage('Submission Successful!');
    }

  };

return (
    <div>
      <form onSubmit={Submit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}