import React from 'react';
import UsersListItem from 'components/molecules/UsersListsItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = ({users, deleteUser}) => {
    return (
        <>
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
