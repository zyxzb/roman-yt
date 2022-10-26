import React from 'react';
import { TitleStyles } from './Title.styles';

const Title = ({title, dimensions}) => {
    return <TitleStyles>{title}{dimensions && ` ${dimensions}px` }</TitleStyles>
}

export default Title;
