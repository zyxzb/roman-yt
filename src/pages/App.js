import React from 'react';
// import UsersList from 'components/organisms/UsersList/UsersList';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from 'assets/styles/GlobalStyle';
import {theme} from 'assets/styles/theme'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Form from 'components/organisms/Form/Form';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import {UserProvider} from 'providers/UserProvider';
import {Wrapper} from './App.styles';
import Dashboard from './Dashboard';

const App = () => {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <MainTemplate>
                    <Wrapper>
                        <UserProvider>
                            <Routes>
                                <Route path="/" element={<Navigate to="/group/" />} />
                                <Route path="/group/" element={< Dashboard />}>
                                    <Route path=":id" element={< Dashboard />}/>
                                </Route>
                                <Route path="addUser" exact element={< Form />}/>
                            </Routes>
                        </UserProvider>
                    </Wrapper>
                </MainTemplate>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
