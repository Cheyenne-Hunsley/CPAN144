//Task Tracker Page
//import react and component functions
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

//Create a function for the main page of the task tracker
//useState intitiallizes tasks as an empty array
export default function TaskPage(){
    const [tasks, setTasks] = useState([])


//create a function to add new tasks
const addTask = (text) => {
    
    let completed;  //variable to store whether a task is done
    
    //set an if statament to make all new tasks not completed
    if (true){
        completed = false;
    }

    const newTask = {text, completed: completed};

    //copies the current task array, as we can't modify state directly
    const updatedTasks = tasks.slice();
    //used push to add the new task to the copy
    updatedTasks.push(newTask);

    //update the state, which re-renders the page
    setTasks(updatedTasks);
}

//Toggle Button Function (for checking and unchecking a task)
function toggleTask(i){
    const updated = tasks.slice();

    //set up an if statment to flip the completed and incompleted
    //status when the button is clicked 
    if(updated[i].completed === true){
        updated[i].completed = false;
    }
    else {
        updated[i].completed = true
    }
    //update the state again
    setTasks(updated);
}

//Delete Button Function (for deleting a task)
function deleteTask(index){
    //create an empty array for updatedTasks
    const updatedTasks = [];

    //set up a loop to itterate through the array and check for the
    //array for position 'i' 
    for(let i=0; i<tasks.length; i++){
        //use an if statement to push the array to updatedTasks
        //if the array[i] does not equal the index value 
        //everything but the desired array value should be pushed
        if(i !== index){
            updatedTasks.push(tasks[i]);
        }
    }
    //update the tasks with new array (missing the deleted one)
    setTasks(updatedTasks);
}

return (
    <div>
        {/* Introduction Header */}
        <h1>Cheyenne's Task Tracker</h1>
        <h3>CPAN144 Assignment 1</h3>
        {/* Pass the AddTask function to the TaskForm */}
        {/* When submitting it'll add the task */}
        <TaskForm onAdd={addTask}/>
        <TaskList
        //Passing the current List of Tasks and The functions
        //for deleting a task and toggling completeness
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        />
    </div>
);

}