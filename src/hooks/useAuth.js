import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/authSlice'

export default function useAuth() {
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector((state) => state.auth)

  const handleLogin = () => {
    dispatch(login({ user: { name: 'Pablo' }, token: 'abc123' }))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return {
      user,
      isAuthenticated,
      handleLogin,
      handleLogout
  } 
} 