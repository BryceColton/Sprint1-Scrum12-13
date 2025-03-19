import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YouthActivities } from './components/Login/YouthActivities'
import { HomePage } from './components/HomePage/HomePage'
import { CalendarView } from './components/Calendar/CalendarView'
import { ActivityBrowser } from './components/ActivityDisplayed/ActivityBrowser'
import { NavigationMenu } from './components/Menu/NavigationMenu'


function App() {

  return (
    <>
      
      <NavigationMenu /> 
    </>
  )
}

export default App
