import Task from "./Task"

const Tasks = ({ tasks, onComplete, onToggle }) => {
  tasks = tasks.filter((task) => {
    return task.status === 'new'
  })

  return (
    <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onComplete={onComplete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks