import React from 'react';
import './App.css';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import {GlobalStyle} from 'assets/styles/GlobalStyle';
import {theme} from 'assets/styles/theme'

const Wrapper = styled.div `
background-color: ${({theme}) => theme.colors.lightGrey};
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;

`;

function App() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
            <Wrapper className="App">
                <UsersList/>
            </Wrapper>
       </ThemeProvider>
    );
}

export default App;
