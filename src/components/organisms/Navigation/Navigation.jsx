import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, Logo} from './Navigation.styles';

const Navigation = () => {
    return (
        <Nav>
            <Logo>
                <h1>
                    Study
                    <br/>
                    Buddy
                </h1>
            </Logo>
            <NavLink to="group">Home</NavLink>
            <NavLink to="addUser">Add User</NavLink>
            <NavLink to="settings" style={{opacity: 0.6, pointerEvents:'none'}}>Settings</NavLink>
            <NavLink to="logout" style={{opacity: 0.6, pointerEvents:'none'}}>Logout</NavLink>
        </Nav>
    );
}

export default Navigation;
