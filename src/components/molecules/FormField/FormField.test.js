import React from "react";
import FormField from './FormField';
import {renderWithThemeProviders} from 'helpers/renderWithThemeProviders'

describe('Form Field', () => {
    it('Renders the conponent', () => {
        renderWithThemeProviders(<FormField id='name' name='name' label='name'/>)
    });
});