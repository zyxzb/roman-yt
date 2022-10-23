import React from 'react';
import styled from 'styled-components';
// import PropsTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label.styles';
import { Input } from 'components/atoms/Input/Input.styles';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
text-align: left;
label{
    margin: 20px 0 8px;
    font-size: 14px;
}

`

const FormField = ({onChange, value, label, name, id, type = 'text'}) => {
    return (
        <Wrapper htmlFor={id}>
            <Label>{label}</Label>
            <Input name={name} id={id} type={type} value={value} onChange={onChange}/>
        </Wrapper>
    );
}

// FormField.propTypes = {
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string
// }

export default FormField;
