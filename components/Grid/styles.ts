import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

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

export const ImagePlaceholder = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  max-height: 161px;
  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAAClCAMAAAAK9c3oAAAAS1BMVEVMaXG3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7dt0PAIAAAAGHRSTlMATzLfD18ggMBA8J/PGHEHeSlp+KyP67VYmm7IAAAE2ElEQVR42u3Z63KjOBAF4KNr6wICMDj9/k+6ERArZGdrqNoa4anSVxVIhH+ctOS2wGiapmmapmmapmmapmmapmmapvmbaWGE7PWAdzbF5yOo7iNSEn7q9XuGdPzyeHZuWUcjpH2zsMQvJazqXFyT8PZN1kHv+L88wlNtpfU9biYV/84jOIl7iSdf4CxuZR58BeFWI1/yoXGPwcoeWPkS198SsZcizRp6ed+UehIzEZkhN6JLluGGiCNlApgUX7Kiqt6bkQ4ekE++JNUNOVMhAcGXPAwqGgQV4wTMfMnToyKbqBgtQHyJmlDRNFKRNIbIl3T9bbU0A7TjSz4GVKRnKgxgO74k4rZ3j7jeiAi4a2F6QDzeqBEV2pzapeH/0KlTSo+6/KVG9NHPp3Y5oS470iH1QOQXl0r5FovenRvRXVM+awwfJeSE9Kqk/bGJdxp3TXnet3V86CZAuxIS0B/8EgdU1ifKzvs2J4Gvd/zSY+Of50Z0T8v0e5BSPQxxX5OHsmhnVCfH0ogeJWQmFS8aKH8dBKrT82vflkrI3bhYFMS7p0R1g381ovVoOy9aA8XUnfZtd3xKzj2G5Te9cH7cd5urzZ5y79wqrsn46ZdPWY/etGjcwJeUh/0pqxFy6od/P59ZcQeb9pRlD1zCuiWXVu6lPfbyI+4wmPLu+ZXHcyvtLGRvQtm31SaPLZF1XPwqbdeF0w1k/btyAcB3D/4tJVHU/pQcJQArZoofnXo+Hm/1JKu0zFEemXU/eTOui+tUeLzRE1Ztjo+fEz35V2n5pZtwF/+1D9bW9noY8JKH5F7avA7Cck/IcmMhtBRzGtNshJdT/yOt7q0Us9AAbp3y2YxUjLk/Dngrnn4Yjbcab6ZPdK7jpPF+BlEiJiF7vKPyVDiZvBrflhVpTMbbAW9tsHLSaJqmaZrm7yO9xSXWe1TkmCVA7ABQYGYlkG1DnrerCMwEQAdekQnFzIE0HGeuRkp3pIzMygVmc0q5AoL3lIk54JNhDq7jBTVTsviKFAHdcdDfUyogHikVBzZbSTsNCA04pkozrljpHCnuhZI5dUnZsUAIWxrPKnG3lVbmhenzjMfPs62QkjqmHMkdM8dMKCkTR8FxSxmZdA5IzMgH9seMU42UearZYeEOnzRzQkmpOUQWOaVlNr7jiMSsYVzYUjoi8jVSbuvOIeU6YT+VlFiYw/Yq4k3Qcv8/HPuK65KgA7PLx2A85V+/pzTM6/YqxZGIAhs4ZvJevWpJVVIibdFk4KzTp5TbUnRMhjlfiKxyH8i2lBv8aYY8ACIDQKfFRYOdJwNLBJjtxwsyx3NtDZjo3Cry+AZN0zT/UwwAKCCLDoBhiU+O4BmbMpYbqsDXBar2rYplZfJRANBsACgVzylPY0hsXykdKiG3dgDcAsAEDfhgWJ9SnsYA9vVTBmNZAlsKFwEsESqdUp7GkBSqpzThCBcMctztQOqcsowxczA/1qXHH9etRx3XDtQhn/dVWlKexyCDqV1LyRvKKawyAAJnrqQ8j23ZaqeMC4B9NjsX9L4CAM+2pDyPAUusmvJoPcdsGo45a0Sm1j0lfbLfxhxRF+TXBVL5ZPCHScImCUCT3Q+ZSDAeljL5bYyIhMZxwXrKDJqmaZqmaZqmaZqmaZqmaZqmaf4C/wDsWLMAa0A+ZQAAAABJRU5ErkJggg==') no-repeat center center;
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
