export default function Home({user, isAuthenticated, handleLogout, handleLogin}) {
  return (
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
  )
}