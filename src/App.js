import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import { Classes, Students, Schools } from './pages';
import Home from "./pages/home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schools' element={<Schools />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/students' element={<Students />} />
      </Routes>
    </>
  );
}


export default App;
