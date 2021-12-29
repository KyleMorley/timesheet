import Profile from './Profile'
import TimeSheet from './TimeSheet'
import Button from './Button'
import CreateUser from './CreateUser'
import Employees from './Employees'
import { useState } from 'react'

const Dashboard = ({user, users}) => {
    const [toggleTimes, setToggleTimes] = useState(false);
    const [toggleCreateUser, setToggleCreateUser] = useState(false)
    
    
    return (
        <div className='dashboard'>
            <Profile user={ user }/>
            <div className='btn-container d-flex flex-row p-4'>
                <Button className='btn btn-toggle btn-dark text-light' text='Add Time' onClick={ () => setToggleTimes(!toggleTimes) }/>
                {
                    user.administrator &&
                    <Button className='btn btn-dark text-light' text='Add User' onClick={ () => setToggleCreateUser(!toggleCreateUser) }/>
                }
            </div>

            {
                toggleTimes && <TimeSheet name={ user.lastName + user.firstName }/>
            }

            {
                toggleCreateUser && <CreateUser users={ users }/>
            }

            
            <div className='employee-list'>
                <h1 className='text-center mb-2'>Staff Details</h1>
                {
                    users.length > 0 && users.map(employee => (<Employees employee={ employee } key={ employee.id }/>))
                }
            </div>
             
        </div>
    )
}

export default Dashboard
