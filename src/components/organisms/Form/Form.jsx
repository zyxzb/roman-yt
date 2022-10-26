import React, {useReducer} from 'react';
import { FormContainer } from './Form.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button.styles';
import Title from 'components/atoms/Title/Title';
import { useGlobalContext } from 'providers/UserProvider';

const initialValues = {
    name: '',
    attendance:'',
    average: '',
    consent: false,
    error: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return{
                ...state,
                [action.field]: action.value,
            };
        case 'CLEAR_VALUES':
            return initialValues;   
            
        case 'CONSENT_TOGGLE':
                return {
                    ...state,
                    consent: !state.consent,
                }
        case 'THROW_ERROR':
                return {
                    error: action.errorValue
                };
            default:
                return state;   
    }
}

const Form = () => {
    const [formValues, dispatch] = useReducer(reducer, initialValues);
    const {handleAddUser} = useGlobalContext();
    
    const handleInputChange = (e) => {
        dispatch({
            type: 'INPUT_CHANGE',
            field: e.target.name,
            value: e.target.value,
        })
    } 

    const handleSubmitUser = (e) => {
        e.preventDefault();
        if(formValues.consent){
            handleAddUser(formValues);
        dispatch({
            type: 'CLEAR_VALUES',
        })
        } else{
            dispatch({
                type: 'THROW_ERROR',
                errorValue: 'You have to check consent before submitting'
            })
        }
    }

    return (
        <FormContainer onSubmit={handleSubmitUser}>
            <Title/>
            <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange}/>
            <FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange}/>
            <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange}/>
            <FormField label='Consent' id='consent' name='consent' type='checkbox' value={formValues.average} onChange={() => dispatch({type: 'CONSENT_TOGGLE'})}/>
            <Button type='submit'>Zapisz</Button>
            {formValues.error && <p>{formValues.error}</p>}
        </FormContainer>
    );
}

export default Form;
