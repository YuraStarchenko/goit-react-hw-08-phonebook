import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import logo from '../img/contacts.png';

const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgMovies = styled.img`
  padding-top: 50px;
  background-image: url('../img/contacts.png');
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Title>
        <ImgMovies src={logo} alt="Logo" />
      </Title>
      <GlobalStyle />
    </Container>
  );
}
