import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header/index";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    <h1>Hello World</h1>
    <Card />
    </>
  );
}

export default App;
