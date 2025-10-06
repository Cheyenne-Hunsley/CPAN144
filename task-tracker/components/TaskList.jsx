import TaskItem from './TaskItem'


export default function TaskList({tasks, onToggle, onDelete}){
    //Set an iff statement to return a statement for No Tasks
    if(tasks.length === 0){
        return <h4>No Tasks! You're Free!</h4>
    }

    return (
        <ul>
            {/* use map function to itterate over the task list */}
            {tasks.map((task, index) => (
                <TaskItem
                    //set up the key to track the lost based on the task array index
                    key={index}
                    //Sends task data to TaskItem
                    task={task}
                    //sends the Task postion
                    index={index}
                    //Passes on the following functions to Task Item
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}