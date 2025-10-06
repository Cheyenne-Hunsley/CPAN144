import {useState} from 'react';

export default function TaskForm({onAdd}){
    const [text, setText] = useState('');

    function handleSubmit(event){
        event.preventDefault(); //prevent the page from refreshing when submitted

        //use text trim(to remove spaces) and if statement to check if text isn't empty
        if(text.trim() !== ''){
            onAdd(text);    //call the onAdd function from TaskPage (parent)
            setText('');    //after task is added clear the input 
        }
    }

    return (
        //create a form that calls the handleSubmit function after submission
        <form onSubmit={handleSubmit}>  
            <input
                type='text'
                //set value as text so input box always displayes the state variable
                value={text}
                //set a change function so that the text state changes to match the input
                onChange={(event) => setText(event.target.value)}
                //placeholder text in input before typing
                placeholder='Enter a task here'
            />
            
            <button type='submit'>Add Task</button>
        </form>
    );
}