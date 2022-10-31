import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import {Wrapper}  from './UsersListItem.styles.js'
import { useGlobalContext } from 'providers/UserProvider';


const UsersListItem = ({userData: {average, name, attendance = 'Nothing to Display'}}) => {
    const {deleteUser} = useGlobalContext()
    
    return (
        <Wrapper>
            <div className={average < 3 ? 'average low' : average < 4 ? 'average medium' : 'average'}>{average}</div>
            <div className='text-container'>
                <p className='name'>{name}</p>
                <p className='attendance'>Lorem, ipsum dolor: <b>{attendance}</b></p>
            </div>
            <DeleteButton onClick={() => deleteUser(name)}/>
        </Wrapper>
    );
}

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string
    })
}

export default UsersListItem;
