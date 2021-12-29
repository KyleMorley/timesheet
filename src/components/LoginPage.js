import Button from './Button'
import { useState } from 'react'

const LoginPage = ({authenticate}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        authenticate(username, password);
    }

    return (
        <div className='container-login'>
        <div className='login-page'>
            <h4>Enter Credentials</h4>
            <form className='form form-control d-flex flex-column' onSubmit={ onSubmit }>
                <input className='mt-2 mb-4' type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
                <input className='mt-2 mb-2' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
                <label className='text-muted mb-2'>Need help? Contact administration</label>
                <Button className='btn btn-block bg-dark text-light' text='Login' type='submit' />
            </form>
        </div>
        </div>
    )
}

export default LoginPage
