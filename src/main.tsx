import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import Router from './router.tsx'
import { ThemeProvider } from "next-themes";



const queryClient  = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme='light'>
        <Router/>
      </ThemeProvider>
    </QueryClientProvider>
    
  </StrictMode>,
)

