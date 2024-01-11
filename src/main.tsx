import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "react-datetime/css/react-datetime.css"
import { Toaster } from './components/ui/toaster.tsx'
import store from './redux/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
          <Toaster/>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
