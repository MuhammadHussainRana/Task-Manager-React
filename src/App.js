import Header from './components/Header'
import Footer from './components/Footer'
import History from './components/History'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])   

const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
}

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => task.id !== id))
}

const completeTask = async(id) => {
  const task = await fetchTask(id)
  const updatedStatus = {...task, status: 'completed'}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers : {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(updatedStatus)
  })

  const data = res.json()

  setTasks(tasks.map((task) => task.id === id ? {...task, status: data.status} : task ))

}
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers : {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(updatedTask)
  })

  const data = res.json()

  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task ))
}

const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  const data = await res.json()
  setTasks([...tasks, data])
}

  return (
    <Router>
      <div className="container">
        <Header title = 'Task Manager' />

        <Routes>
          <Route path='/' element = {
            <>
              { tasks.length > 0 ? ( <Tasks tasks = {tasks} onComplete = {completeTask} onToggle = {toggleReminder}/>) 
              : ('No Tasks to show')}
            </>
          }/>
          <Route path='/history' element={<History tasks = {tasks} />} />
        </Routes>
        
        <Footer onAdd = {addTask}/>
      </div>
    </Router>
    
  );
}

export default App;
