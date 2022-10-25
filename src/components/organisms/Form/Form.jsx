import React from 'react';
import { FormContainer } from './Form.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styles';
import Title from 'components/atoms/Title/Title';
import { useGlobalContext } from 'providers/UserProvider';

const Form = () => {
    const {handleSubmit, formValues, handleInputChange} = useGlobalContext();
  
    return (
        <>
        <FormContainer onSubmit={handleSubmit}>
            <Title/>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}/>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}/>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}/>
            <Button type='submit'>Zapisz</Button>
        </FormContainer>
        </>
    );
}

export default Form;
