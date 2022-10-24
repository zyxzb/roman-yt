import React, {useState} from 'react';
import {users as usersData} from 'data/users';
import './App.css';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from 'assets/styles/GlobalStyle';
import {theme} from 'assets/styles/theme'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Form from 'components/organisms/Form/Form';

const Wrapper = styled.div `
    background-color: ${ ({theme}) => theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

`;

const Navigation = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${ ({theme}) => theme.colors.lightGrey};
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 40px 30px;
    text-align: right;
    border-right: 1px solid ${ ({theme}) => theme.colors.borderColor};

    a{
        color: ${ ({theme}) => theme.colors.darkGrey};
        margin-bottom: 15px;
        text-decoration: none;
        font-weight: 700;
        position: relative;

        &.active::after{
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -30px;
            width: 25px;
            height: 3px;
            background-color: ${ ({theme}) => theme.colors.borderColor};
        }
    }

`

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
                    <Wrapper className="App">
                    <Navigation>
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="addUser">Add User</NavLink>
                    </Navigation>
                        <Routes>
                            <Route path="/" index element={<UsersList users={users} deleteUser={deleteUser}/>}></Route>
                            <Route path="addUser" exact element={<Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} formValues={formValues}/>}  />
                        </Routes>
                    </Wrapper>
                </ThemeProvider>
            </BrowserRouter>
        );
    }

    export default App;
