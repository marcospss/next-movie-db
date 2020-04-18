import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  overflow: hidden;
  padding: 0 0 40px 20px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
`;

export const Backdrop = styled.figure`
  margin: 0px;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const GoBackHome = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fff6;
  /* border-top-left-radius: 1rem; */
  border-bottom-right-radius: 1rem;
  overflow: hidden;
  padding: 15px 30px;
  a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;

export const Poster = styled.figure`
  position: absolute;
  top: -120px;
  left: 40px;
  margin: 0;
  img {
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.5);
  }
`;

export const Info = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 10px 0 10px 220px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Category = styled.p`
  width: 100%;
  margin: 10px 0;
`;
export const Rating = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const Overview = styled.p`
  margin: 20px 40px;
  font-size: 1rem;
  line-height: 20px;
`;

export const Similar = styled.section`
  position: relative;
  width: 100%;
  margin: 0px 40px;
`;

export const Recommendations = styled.aside`
  position: relative;
  width: 30%;
  margin-left: 20px;
  padding: 0 20px;
  overflow-y: auto;
  background-color: #ccc;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;
