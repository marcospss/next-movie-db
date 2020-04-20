import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  width: 286px;
  max-width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 0px;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: fill;
  }
  figcaption {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 14px;
    background-color: #efefef;
    color: #1a202c;
    font-weight: bold;
    line-height: 20px;
    height: 60px;
  }
`;

export const Overview = styled.p`
  line-height: 18px;
  padding: 5px 14px 10px;
  height: 100vh;
  max-height: 88px;
`;

export const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    background-color: #0006;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    color: #fff;
    &:hover {
      background-color: #0b2239;
    }
  }
`;
