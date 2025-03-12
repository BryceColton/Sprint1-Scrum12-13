import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './components/Login/LoginForm'
import { Footer } from './components/Login/Footer'
import { SearchHeader } from './components/Login/SearchHeader'
import YouthActivities from './components/Login/YouthActivities'

function App() {

  return (
    <>
      <LoginForm />
      <Footer />
    </>
  )
}

export default App
