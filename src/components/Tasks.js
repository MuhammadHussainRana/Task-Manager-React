import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
  tasks = tasks.filter((task) => {
    return task.status === 'new'
  })

  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks