import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import logo from '../img/Bookmarks-amico.webp';
import Icon from '@mui/material/Icon';

const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgMovies = styled.img`
  width: 500px;
  padding-top: 50px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;

const Text = styled.p``;

export default function Home() {
  return (
    <Container>
      <Title>
        <Icon>Phone Book</Icon>
        <ImgMovies src={logo} alt="Logo" />
      </Title>
      <GlobalStyle />
    </Container>
  );
}
