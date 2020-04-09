import styled from 'styled-components';

export const Container = styled('div')`
  margin: 0px;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.bodyColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.join(',')};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;
