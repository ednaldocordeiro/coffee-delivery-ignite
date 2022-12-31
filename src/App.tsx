import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BuyCoffeeProvider } from './contexts/BuyCoffeeContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BuyCoffeeProvider>
          <Router />
        </BuyCoffeeProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
