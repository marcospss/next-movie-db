import styled from 'styled-components';

interface StyledProps {
  totalPercentage: number;
}
// https://codepen.io/jsdev/pen/ojycf
export const Star = styled.div<StyledProps>`
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 1.5rem;
  height: 25px;
  width: 100px;
  position: absolute;
  top: -3rem;
  right: 2rem;
  text-shadow: 0 1px 0 #a2a2a2;
  &::before {
    content: '★★★★';
    opacity: 0.3;
  }
  &::after {
    color: gold;
    content: '★★★★';
    text-shadow: 0 1px 0 #ab5414;
    position: absolute;
    z-index: 1;
    display: block;
    left: 0;
    top: 0;
    overflow: hidden;
    width: ${({ totalPercentage }) => `${totalPercentage}%`};
  }
`;
