import React,{useState} from 'react';
import {users as usersData} from 'data/users';
import UsersListItem from 'components/molecules/UsersListsItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styles';

const initialValue = {
        name: '',
        attendance:'',
        average: '',
}

const UsersList = () => {
    const [users, setUsers] = useState(usersData);
    const [formValues, setFormValues] = useState(initialValue);

    const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name)
    setUsers(filteredUsers)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormValues(initialValue)
    }

    const handleInputChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues);
    } 

    return (
        <>
        <Wrapper as='form' onSubmit={handleSubmit}>
            <Title>Add New Student</Title>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}/>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}/>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}/>
            <Button type='submit'>Zapisz</Button>
        </Wrapper>
        <Wrapper>
            <StyledList>
                {users.map((userData, index) => (
                    <UsersListItem deleteUser={deleteUser} userData={userData} key={index}/>
                ))} 
            </StyledList>
        </Wrapper>
        </>
    );
}

export default UsersList;
