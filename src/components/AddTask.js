import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('no task')
            return
        } else {
            onAdd({text, date:time, reminder})
            setTime('')
            setText('')
            setReminder(false)
        }
    }
    return (
        <form 
            className='add-form'
            onSubmit={onSubmit}
        >

            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={text} 
                    onChange={ e=>setText(e.target.value) }
                />
            </div>

            <div className="form-control">
                <label>Time</label>
                <input 
                    type="text" 
                    placeholder="Add Time" 
                    value={time}
                    onChange={ e=>setTime(e.target.value) }
                />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox" 
                    checked={reminder}
                    value={reminder}
                    onChange={ e=>setReminder(e.currentTarget.checked) }
                />
            </div>
            <input 
                type='submit' 
                className='btn btn-block' 
                style={{backgroundColor:!text?'black':'darkgreen'}}
                value='Save Task'
            />

        </form>
    )
}

export default AddTask