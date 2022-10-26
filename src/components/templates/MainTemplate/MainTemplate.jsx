import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    grid-row: 1/1;
    grid-column: 2/3;
    border-bottom: 1px solid ${({theme}) => theme.colors.darkPurple};
`
const News = styled.div`
    grid-row: 1/3;
    grid-column: 3/3;
    border-left: 1px solid ${({theme}) => theme.colors.darkPurple};

`

const MainTemplate = ({children}) => {
        return (
            <Wrapper>
              <Navigation/>
              <SearchBarWrapper/>
              {children}
              <News/>
            </Wrapper>
        );
    }

    export default MainTemplate;
