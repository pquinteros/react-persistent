import AppRoutes from './routes'
import useAuth from './hooks/useAuth'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function App() {
  const auth = useAuth()

  return <AppRoutes auth={auth} />
}

export default App
