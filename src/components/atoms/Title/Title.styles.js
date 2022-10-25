import styled from 'styled-components';

export const TitleStyles = styled.h1 `
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;