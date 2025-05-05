import { useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector((state) => state.auth)

  const handleLogin = () => {
    dispatch(login({ user: { name: 'Pablo' }, token: 'abc123' }))
  }

  const handleLogout = () => {
    dispatch(logout())
  }
  
  return (
    <>
     <div className="p-4">
      <h1 className="text-xl font-bold">Redux Persist Demo</h1>
      {isAuthenticated ? (
        <>
          <p>Bienvenido, {user.name}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
    </>
  )
}

export default App
