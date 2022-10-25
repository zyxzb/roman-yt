import React, {useState} from 'react';
import { FormContainer } from './Form.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styles';
import Title from 'components/atoms/Title/Title';
import { useGlobalContext } from 'providers/UserProvider';

const initialValues = {
    name: '',
    attendance:'',
    average: '',
}

const Form = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const {handleAddUser} = useGlobalContext();
    
    const handleInputChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues);
    } 

    const handleSubmitUser = (e) => {
        e.preventDefault();
        handleAddUser(formValues);
        setFormValues(initialValues);
    }

    return (
        <FormContainer onSubmit={handleSubmitUser}>
            <Title/>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}/>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}/>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}/>
            <Button type='submit'>Zapisz</Button>
        </FormContainer>
    );
}

export default Form;
