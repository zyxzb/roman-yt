import styled from 'styled-components';

export const Wrapper = styled.div `
    grid-row: 1/3;
    grid-column: 3/4;
    border-left: 1px solid ${({theme}) => theme.colors.darkPurple};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    position: relative;

    h2{
        position: fixed;
        padding: 40px 0;
        margin-left: 50px;
        margin-top: 0;
        width: 100%;
        color: ${({theme}) => theme.colors.darkGrey};
        background-color: ${({theme}) => theme.colors.lightGrey};
    }
`