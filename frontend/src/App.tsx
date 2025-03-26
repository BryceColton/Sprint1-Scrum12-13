import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './App.css'
import { YouthActivities } from './components/Login/YouthActivities'
import { HomePage } from './components/HomePage/HomePage'
import { CalendarView } from './components/Calendar/CalendarView'
import { ActivityBrowser } from './components/ActivityDisplayed/ActivityBrowser'
import { NavigationMenu } from './components/Menu/NavigationMenu'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";


function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Menu' element={<NavigationMenu />} />
        <Route path="/login" element={<YouthActivities />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/activities" element={<ActivityBrowser />} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
