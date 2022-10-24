import React from 'react';
import { Wrapper } from '../UsersList/UsersList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styles';


const Form = ({handleSubmit,handleInputChange, formValues}) => {
  
    return (
        <>
        <Wrapper as='form' onSubmit={handleSubmit}>
            <Title>Add New Student</Title>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}/>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}/>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}/>
            <Button type='submit'>Zapisz</Button>
        </Wrapper>
        </>
    );
}

export default Form;
