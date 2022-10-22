import React from 'react';
import {users} from 'data/users';
import UsersListItem from 'components/molecules/UsersListsItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => {
    return (
        <Wrapper>
            <StyledList>
                {users.map((userData, index) => (
                    <UsersListItem userData={userData} key={index}/>
                ))}
            </StyledList>
        </Wrapper>
    );
}

export default UsersList;
