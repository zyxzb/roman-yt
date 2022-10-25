import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from 'assets/styles/GlobalStyle';
import {theme} from 'assets/styles/theme'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import {UserProvider} from 'providers/UserProvider';

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <MainTemplate>
                    <UserProvider>
                        <Routes>
                            <Route path="/" index element={< UsersList />}></Route>
                            <Route path="addUser" exact element={< Form />}/>
                        </Routes>
                    </UserProvider>
                </MainTemplate>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
