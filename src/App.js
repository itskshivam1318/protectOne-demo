import './App.css';
import { Home } from './Pages/Home';
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#1A989D'

    },
    secondary: {
      main: '#f50057'
    }
  },
  typography: {
    fontWeightRegular: 400

  }
})
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
