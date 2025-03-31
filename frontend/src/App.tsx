import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './App.css'
import { NewLoginForm } from './components/Login/NewLoginPage'
import { HomePage } from './components/HomePage/HomePage'
import { CalendarView } from './components/Calendar/CalendarView'
import { ActivityBrowser } from './components/ActivityDisplayed/ActivityBrowser'
import { NavigationMenu } from './components/Menu/NavigationMenu'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { BlogPosts } from './components/BlogPosts/BlogPosts';
import { ScheduleActivityForm } from './components/ScheduledForm/ScheduleForm';


function App() {

  return (
    <>
      <Routes>
      <Route element={<Layout />}>
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Menu' element={<NavigationMenu />} />
        <Route path="/" element={<NewLoginForm />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/activities" element={<ActivityBrowser />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/scheduleForm" element={<ScheduleActivityForm/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
