import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import logo from '../img/Bookmarks-amico.webp';

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

export default function Home() {
  return (
    <Container>
			<Title>
	Phone Book
        <ImgMovies src={logo} alt="Logo" />
      </Title>
      <GlobalStyle />
    </Container>
  );
}
