import { useState } from 'react'
import './App.css'

import Home from './pages/home'
import useAuth from './hooks/useAuth'

function App() {
  const auth = useAuth()
  
  return (
    <>
      <Home {...auth} />
    </>
  )
}

export default App
