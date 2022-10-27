import {
    Button
} from 'components/atoms/Button/Button.styles';
import styled from 'styled-components';

export const ArticleWrapper = styled.form `
display: flex;
flex-direction: column;
align-items: left;
margin: 50px auto;
background-color:white;
width: 80%;
padding: 40px 30px;
border-radius: 15px;
box-shadow: 0 5px 15px -10px rgba(0,0,0,0.3);
color: ${({theme}) => theme.colors.darkGrey};

&:nth-of-type(1){
    margin-top: 150px;
}

${Button}{
    width: max-content;
    margin-bottom:0;
    padding: 10px 30px;
}
p{
    line-height: 1.6rem;
}
`

export const TitleWrapper = styled.div `
h3{
    margin: 0;
    font-size: ${({theme}) => theme.fontSize.xl}; 
}
p{
    margin: 0;
    font-size: ${({theme}) => theme.fontSize.m};
}
`
export const ContentWrapper = styled.div `
    display: flex;
    img{ 
       margin-left: 30px;
       width: 40%;
       object-fit: cover;
    }

`