import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ScheduleCard from './view/ScheduleCard.tsx'
import {HeroUIProvider} from '@heroui/react'
import CustomEdit from './components/CustomEdit.tsx'
import Login from './view/Login.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider> 
          <ScheduleCard/>
    </HeroUIProvider>

  </StrictMode>,
)
