import React from "react";
import Form from "./Form";
import UsersList from "../UsersList/UsersList";
import {screen, fireEvent} from "@testing-library/react";
import { renderWithThemeProviders } from 'helpers/renderWithThemeProviders';

describe('Form Field', () => {
    it('Adds new user to the list', () => {
        renderWithThemeProviders(
        <>
            <Form/>
            <UsersList/>
        </>
        );
        
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Ania' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
        fireEvent.click(screen.getByTestId('Consent'));
        fireEvent.click(screen.getByText('Zapisz'));
        screen.getByText('Ania')

    });
});