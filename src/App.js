import { ThemeProvider } from 'styled-components';
import { styledTheme } from './assets/helpers/styled-theme';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <div className="App">
        <div style={{ margin: '1rem' }}>
          <Button color="primary" size="sm">
            Primary
          </Button>
          <Button color="primary" size="md">
            Primary
          </Button>
          <Button color="primary" size="lg" radius="sm">
            Primary
          </Button>
          <Button color="primary" size="xl" fw="bold">
            Primary
          </Button>
        </div>
        <div style={{ margin: '1rem' }}>
          <Button color="secondary" size="sm">
            Secondary
          </Button>
          <Button color="secondary" size="md">
            Secondary
          </Button>
          <Button color="secondary" size="lg">
            Secondary
          </Button>
          <Button color="secondary" size="xl" fw="bold">
            Secondary
          </Button>
        </div>
        <div style={{ margin: '1rem' }}>
          <Button color="info" size="sm">
            Info
          </Button>
          <Button color="info" size="md">
            Info
          </Button>
          <Button color="info" size="lg">
            Info
          </Button>
          <Button color="info" size="xl" fw="bold">
            Info
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
