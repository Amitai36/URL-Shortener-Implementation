import { StrictMode } from 'react'
import "react-toastify/ReactToastify.css"
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify"
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from "react-query"

import App from './App.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ToastContainer position='bottom-right' />
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>,
)
