import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ScheduleCard from './view/ScheduleCard.tsx'
import {HeroUIProvider} from '@heroui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider> 
          <ScheduleCard/>
    </HeroUIProvider>

  </StrictMode>,
)
