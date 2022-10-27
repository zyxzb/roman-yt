import React from 'react';
import styled from 'styled-components';
import { SearchBarWrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input.styles';

const StatusInfo = styled.div`
color:${({theme}) => theme.colors.darkGrey};
font-size: ${({theme}) => theme.fontSize.l};
font-weight: 700;

p{
    margin: 5px 40px 5px 25px ;
    &:nth-of-type(1){
        font-size: ${({theme}) => theme.fontSize.m};
    }
}
`

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <p>
                    <strong>Teacher</strong>
                </p>
            </StatusInfo>
            <Input placeholder='find student'/>
        </SearchBarWrapper>
    );
}

export default SearchBar;
