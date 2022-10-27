import styled from "styled-components";
import { Input } from "components/atoms/Input/Input.styles";

export const SearchBarWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;
    border-bottom: 1px solid ${({theme}) => theme.colors.darkPurple};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ${Input} {
        color:${({theme}) => theme.colors.darkGrey};
        border: 1px solid ${({theme}) => theme.colors.lightGrey};
        font-weight: 700;
        padding: 10px 15px;
        max-width: 300px;
        width: 100%;
        &::placeholder{
            opacity: 0.3;
        }
    }
`

