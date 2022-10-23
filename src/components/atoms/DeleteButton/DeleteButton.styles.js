import styled from 'styled-components';

export const StyledButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.grey};
    color: ${({theme}) => theme.colors.white};
    border: none;
    cursor: pointer;
    svg{
        width: 30px;
        height: 30px;
        fill: ${({theme}) => theme.colors.white};

    }
    &:hover svg{
        fill: ${({theme}) => theme.colors.error};
    }

`;