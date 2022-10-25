import React from 'react';
import UsersListItem from 'components/molecules/UsersListsItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import { useGlobalContext } from 'providers/UserProvider';

const UsersList = () => { 
    const {users} = useGlobalContext();

    return (
        <>
        <Wrapper>
            <StyledList>
                {users.map((userData, index) => (
                    <UsersListItem userData={userData} key={index}/>
                ))} 
            </StyledList>
        </Wrapper>
        </>
    );
}

export default UsersList;
