import { useState, useEffect } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { IoChevronBackCircleSharp } from 'react-icons/io5' 
import Button from './Button'
import Task from './Task'

const History = ({tasks}) => {

  const navigate = useNavigate()
  tasks = tasks.filter((task) => {
    return task.status === 'completed'
  })

  return (
    <>
        {tasks.map((task) => (
          <>
            <h4> {task.text} </h4>
            <p>{task.day}</p>
          </>

        ))}

        <footer>
        <IoChevronBackCircleSharp size={50} className= 'back-icon' onClick={() => {
          navigate(-1)
        }} />
        </footer>
    </>
  )
}

export default History