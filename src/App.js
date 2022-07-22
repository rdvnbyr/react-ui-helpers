import { ThemeProvider } from 'styled-components';
import { styledTheme } from './assets/helpers/styled-theme';
import './App.css';
import Buttons from './partials/Buttons';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <Buttons />
    </ThemeProvider>
  );
}

export default App;
