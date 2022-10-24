import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    background-color: ${ ({theme}) => theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
` 
const MainTemplate = ({children}) => {
        return (
            <Wrapper>
              <Navigation/>
              {children}
            </Wrapper>
        );
    }

    export default MainTemplate;
