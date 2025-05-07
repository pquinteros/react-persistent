import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { Suspense } from 'react'

import Home from './pages/Home'
import About from './pages/About'
const Blog = lazy(() => import('./pages/Blog'))

export default function AppRoutes({ auth }) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home {...auth} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Blog />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}