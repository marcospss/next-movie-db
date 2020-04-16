import styled from 'styled-components';

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #353535;
  font-size: 3rem;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: auto;
  width: auto;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;
  &:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em, rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.1);
  }
  img {
    width: 100%;
  }
  figcaption {
    padding: 10px;
    font-size: 14px;
  }
`;
