import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LoginForm } from './LoginForm'
import { Footer } from './Footer'
import { SearchHeader } from './SearchHeader'
export function LoginPage() {

  return (
    <>
          <SearchHeader />
            <LoginForm />

        <Footer />
    </>
  )
}

