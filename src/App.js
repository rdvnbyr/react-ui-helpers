import { ThemeProvider } from 'styled-components';
import { styledTheme } from './assets/helpers/styled-theme';
import './App.css';
import Buttons from './pages/Buttons';
import Header from './layouts/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inputs from './pages/Inputs';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/inputs" element={<Inputs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
