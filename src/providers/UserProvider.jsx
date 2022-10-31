import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import {users as usersData} from 'data/users';

export const UsersContext = React.createContext()

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/students')
        .then(({data}) => setUsers(data.students))
        .catch(err => console.log(err))
    }, [])

    const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
    }

    const handleAddUser = (values) => {
        const newUser = {
            name: values.name,
            attendance: values.attendance,
            average: values.average,
        }
        setUsers([...users, newUser]);        
    }

    return (
    <UsersContext.Provider value={{users, deleteUser, handleAddUser}}>
        {children}
    </UsersContext.Provider>
    );
}

export const useGlobalContext = () => useContext(UsersContext)
