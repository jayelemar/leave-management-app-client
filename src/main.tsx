import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "react-datetime/css/react-datetime.css"
import { Toaster } from './components/ui/toaster.tsx'

import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


axios.defaults.withCredentials = true;

const queryCLient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>


      <BrowserRouter>
          <QueryClientProvider client={queryCLient}>
            <App />
            <ToastContainer/>
            <Toaster/>
            <ReactQueryDevtools />
          </QueryClientProvider>

      </BrowserRouter>


  </React.StrictMode>,
)
