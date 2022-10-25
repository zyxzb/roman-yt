import React, { useState, useContext } from 'react'
import {users as usersData} from 'data/users';

export const UsersContext = React.createContext()

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
    }

    const handleAddUser = (values) => {
        const newUser = {
            name: values.name,
            attendances: values.attendance,
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
