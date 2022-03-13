import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { CardList } from "./components/CardList";
import styled from 'styled-components';

const Container = styled.main`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <CardList />
      </Container>
    </>
  );
}

export default App;
