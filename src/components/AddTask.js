import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
    return (
        <form className='add-form'>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Time</label>
                <input type="text" placeholder="Add Time"/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>
            <input type='submit' className='btn btn-block' value='Save Task'></input>
        </form>
    )
}

export default AddTask
