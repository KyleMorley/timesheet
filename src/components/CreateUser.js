import Button from './Button'
import { useState } from 'react'

const CreateUser = ({users}) => {
    const [newUser, setNewUser] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [administrator, setAdministrator] = useState(false);

    //Add user to server
    const addUser = async (user) => {
        const res = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = res.json()
        setNewUser([...users, data])
    }

    //Submit new user
    const onSubmit = (e) => {
        e.preventDefault();
        if(!firstName || !lastName || !username || !password || !title) {
            alert('Please fill out all fields');
        } else {
            addUser({ username, password, title, firstName, lastName, administrator });
            setFirstName('');
            setLastName('');
            setUsername('');
            setPassword('');
            setTitle('');
            setAdministrator(false);
            alert('User added succesfully')
        }
    }

    return (
        <div className='dash-form'>
            <form className='form form-control d-flex flex-column mt-2' onSubmit={ onSubmit }>
                <input className='mt-2' type='text' placeholder='First Name' value={ firstName } onChange={ e => setFirstName(e.target.value) }/>
                <input className='mt-2' type='text' placeholder='Last Name' value={ lastName } onChange={ e => setLastName(e.target.value) }/>
                <input className='mt-2' type='text' placeholder='Username' value={ username } onChange={ e => setUsername(e.target.value) }/>
                <input className='mt-2' type='text' placeholder='Password' value={ password } onChange={ e => setPassword(e.target.value) }/>
                <input className='mt-2' type='text' placeholder='Job Title' value={ title } onChange={ e => setTitle(e.target.value) }/>
                <label className='mt-2'>Administrator</label>
                <input type='checkbox' className='mt-2' value={ administrator } onClick={() => setAdministrator(!administrator)}/>
                <Button className=' mt-2 btn btn-block btn-dark text-light' text='Submit' type='submit'/>
            </form>
        </div>
    )
}

export default CreateUser
