import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Button  from './Button'

const AddTaskModal = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add task')
            return
        }

        onAdd({text, day, reminder, status:'new'})
        setText('')
        setDay('')
        setReminder(false)
    }


  return (
    <>
      <button type='button' className='plus-button' data-bs-toggle='modal' data-bs-target='#addClientModal'>
      </button>

      <div
        className='modal fade'
        tabindex="-1"
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
        role="dialog"
      >
        <div className='modal-dialog  modal-dialog-centered' role="document">
          <div className='modal-content'>
            <div className='modal-header'>
              <h3 className='modal-title' id='addClientModalLabel'>
                Add Task
              </h3>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>Task</label>
                  <input
                    type='text'
                    className='form-control'
                    id='task'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label class="form-label">Date Time</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
                <div className='mb-3 form-control-check' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}>
                  <label className='form-label'>Reminder</label>
                  <input type='checkbox'/>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type='submit' class="btn btn-primary" data-bs-dismiss='modal'>Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default AddTaskModal