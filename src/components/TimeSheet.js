import { useState } from 'react'
import DatePicker from 'react-date-picker'
import Button from './Button'

const TimeSheet = ({name}) => {
    const [value, onChange] = useState(new Date());
    let [job, setJob] = useState('');
    let [hours, setHours] = useState('');
    const [time, setTime] = useState([])

    //Add timesheet to server
    const addTime = async (time) => {
        const res = await fetch('http://localhost:4000/timesheets', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(time)
        })

        const data = res.json()
        setTime(data);
    }
    

    const onSubmit = (e) => {
        e.preventDefault();

        if(job !== '' && hours !== ''){
            addTime({name, value, job, hours})

            setJob('');
            setHours('');
        } else {
            console.log('failure')
        }
    }

   

    return (
        <div className='dash-form'>
            <form className='form form-control d-flex flex-column mt-2' onSubmit={ onSubmit }>
            <DatePicker onChange={ onChange } value={ value } format='dd-MM-y'/>
            <input className='mt-2' type='text' value={ job }  placeholder='Job' onChange={ e =>  setJob(e.target.value)}/>
            <input className='mt-2 mb-4' type='tel' value={ hours }  placeholder='Enter Hours' onChange={ e => setHours(e.target.value) }/>
            <Button className='btn btn-block btn-dark text-light' text='Submit' type='submit'/>
            </form>
        </div>
        
    )
}

export default TimeSheet
