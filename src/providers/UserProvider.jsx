import React, { useState, useContext } from 'react'
import {users as usersData} from 'data/users';

const initialValue = {
    name: '',
    attendance:'',
    average: '',
}

export const UsersContext = React.createContext()

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState(usersData);
    const [formValues, setFormValues] = useState(initialValue);

    const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name: formValues.name,
            attendances: formValues.attendance,
            average: formValues.average,
        }

        setUsers([...users, newUser]);
        setFormValues(initialValue);
        
    }

    const handleInputChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues);
    } 

    return (
    <UsersContext.Provider value={{users, formValues, deleteUser, handleSubmit, handleInputChange }}>
        {children}
    </UsersContext.Provider>
    );
}

export const useGlobalContext = () => useContext(UsersContext)
