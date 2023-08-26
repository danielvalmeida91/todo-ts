import React from 'react'
import ReactDOM from 'react-dom/client'

import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
