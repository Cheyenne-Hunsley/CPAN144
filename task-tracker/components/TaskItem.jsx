//pass task, index, onToggle and onDelete as props
export default function TaskItem({task, index, onToggle, onDelete}){
    //Set up a veriable for tasks text style
    let textStyle = {};
    //if the task is completed, the text will have a line through it
    //if it is incomplete it will appear normal. 
    if(task.completed === true){
        textStyle = {textDecoration: 'line-through'};
    }
    else{
        textStyle = {textDecoration: 'none'};
    }

    //Set up the toggle button text to change to undo a completed task
    //if clicked by accident. 
    let buttonText = 'Completed'
    if(task.completed === true){
        buttonText = 'Undo'
    }
    
    return (
        // set up the task list with the text style and button events
        <li>
            <span style={textStyle}>
                {task.text}
            </span>
            <button onClick={() => onToggle(index)}>
                {buttonText}
            </button>
            <button onClick={() => onDelete(index)}>
                Delete
            </button>
        </li>
    );
}