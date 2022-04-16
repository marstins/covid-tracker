import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StyledEngineProvider>
  )
}

export default App
