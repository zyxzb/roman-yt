import React, {useState} from 'react';
import {users as usersData} from 'data/users';
import UsersList from 'components/organisms/UsersList/UsersList';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from 'assets/styles/GlobalStyle';
import {theme} from 'assets/styles/theme'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const initialValue = {
    name: '',
    attendance:'',
    average: '',
}

    const App = () => {

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
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                        <MainTemplate>
                            <Routes>
                                <Route path="/" index element={<UsersList users={users} deleteUser={deleteUser}/>}></Route>
                                <Route path="addUser" exact element={<Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} formValues={formValues}/>}  />
                            </Routes>
                            </MainTemplate>
                </ThemeProvider>
            </BrowserRouter>
        );
    }

    export default App;
