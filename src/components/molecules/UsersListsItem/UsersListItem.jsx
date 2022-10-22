import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import {Wrapper}  from './UsersListItem.styles.js'

const UsersListItem = ({userData: {average, name, attendances = 'Nothing to Display'}}) => {

    // const {average, name, attendances} = userData;

    return (
        <Wrapper>
            {/* <li className={styles.list}></li>  - css module*/}
            <div className={average < 3 ? 'average low' : average < 4 ? 'average medium' : 'average'}>{average}</div>
            {console.log(average)}
            <div className='text-container'>
                <p className='name'>{name}</p>
                <p className='attendance'>Lorem, ipsum dolor: <b>{attendances}</b></p>
            </div>
            <Button/>
        </Wrapper>
    );
}

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendances: PropTypes.string
    })
}

export default UsersListItem;
