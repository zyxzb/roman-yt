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
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="addUser">Add User</NavLink>
            <NavLink to="settings">Settings</NavLink>
            <NavLink to="logout">Logout</NavLink>
        </Nav>
    );
}

export default Navigation;
