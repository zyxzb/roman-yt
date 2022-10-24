import styled from 'styled-components';

export const Nav = styled.nav `
    position: absolute;
    left: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 150px;
    padding: 40px 30px;
    text-align: right;
    border-right: 1px solid ${ ({theme}) => theme.colors.borderColor};
    user-select: none;

    a{
        color: ${ ({theme}) => theme.colors.darkGrey};
        margin-bottom: 15px;
        text-decoration: none;
        font-weight: 700;
        position: relative;
        &:nth-of-type(1){
            margin-top: 70px;
        }

        &.active::after{
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -30px;
            width: 25px;
            height: 3px;
            background-color: ${ ({theme}) => theme.colors.borderColor};
        }
    }
`

export const Logo = styled.div `
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  position: absolute;
  top: 20px;
  left: 0;
  display: flex;
  justify-content: center;
  text-align: left;
  
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
  }
`;