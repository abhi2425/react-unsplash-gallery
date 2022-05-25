import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/utilities.css'
import App from './App'
import GlobalContextProvider from './context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
