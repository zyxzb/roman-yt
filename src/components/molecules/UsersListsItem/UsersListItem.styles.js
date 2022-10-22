import styled from 'styled-components';

export const Wrapper = styled.li `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding: 10px;
    height: 100px;
    &:not(:last-child)::after{
        content:'';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgray;
    }
    .average {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 42px;
        min-height: 42px;
        color: white;
        font-weight: 700;
        border-radius: 50%;
        margin-right: 30px;
        background-color: ${({theme}) => theme.colors.success};
        &.low{
            background-color: ${({theme}) => theme.colors.error};
        }
        &.medium{
            background-color: ${({theme}) => theme.colors.warning};
        }
    }
    .text-container {
        display: flex;
        flex-direction: column;
        width: max-content;
        margin-right: 15px;
        p{
            margin: 0; 
            color: ${({theme}) => theme.colors.darkGrey};
            text-align: left;
        }
        .name{
            font-size: ${({theme}) => theme.fontSize.l};
            font-weight: 700;
        }
        .attendance{
            font-size: ${({theme}) => theme.fontSize.m};
        }

    }
`;