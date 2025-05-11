import { AuthContext } from './context/AuthContext'
import useAuth from './hooks/useAuth'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'
const router = createBrowserRouter(routes)

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

import './App.css'

function App() {
  const auth = useAuth()
  return (
  <AuthContext.Provider value={auth}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AuthContext.Provider>
  )
}

export default App
