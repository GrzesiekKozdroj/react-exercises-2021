import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <div>
          {
            tasks.length ?
                tasks.map((task)=>( <Task key = {task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> ))
            : 
                <p>no tasks</p>
          }
        </div>
    )

}

export default Tasks
