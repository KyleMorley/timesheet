//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from './LoginPage'
import Dashboard from './Dashboard'

const Services = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);
    const [timesheets, setUserTimesheets] = useState([]);

    //Users from DB
    useEffect(() => {
        const getUsers = async() => {
            const data = await fetchUsers();
            setUsers(data);
        }

        getUsers();
    }, [])

    const fetchUsers = async () => {
        const res = await fetch('http://localhost:4000/users');

        const data = await res.json();

        return data;
    }

    //Fetch timesheet submissions
    useEffect(() => {
        const getUsersTimes = async() => {
            const data = await fetchUserTimesheets();
            setUserTimesheets(data);
        }

        getUsersTimes();
    }, [])

    const fetchUserTimesheets = async () => {
        const res = await fetch('http://localhost:4000/timesheets');

        const data = await res.json();

        return data;
    }

    //Filter users looking for a match, set a state for filtered user. Set logged in to true on success.
    const authenticate = (username, password) => {
        users.filter((user) => {
            if(username === user.username && password === user.password) {
                setUser(user);
                setLoggedIn(true);
            } 
        });   
    }


    return (
        <div>
        {
            !loggedIn ? 
            <LoginPage  authenticate={ authenticate }/>   
            : 
            <Dashboard user={ user } users={ users } timesheets={ timesheets }/> 
        }
        </div>
    )
}

export default Services

