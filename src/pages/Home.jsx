import { useAuthContext } from '../context/AuthContext'

export default function Home() {
  const { user, isAuthenticated, handleLogout, handleLogin } = useAuthContext()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-7">Redux Persist Demo</h1>
      {isAuthenticated ? (
        <>
          <p className="mb-5">Bienvenido, {user.name}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={handleLogin}>Iniciar sesión</button>
      )}
    </div>
  )
}