import styled from 'styled-components';

export const Button = styled.button `
  cursor: pointer;
  margin: 25px 0 10px;
  padding: ${({ isBig }) => (isBig ? '15px 38px' : '15px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  width: 100%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: all ease-in-out 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;