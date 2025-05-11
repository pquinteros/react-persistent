import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import { Suspense } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Protect from './pages/Protect'
const Blog = lazy(() => import('./pages/Blog'))
const Post = lazy(() => import('./pages/Post'))

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
        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <Post />
            </Suspense>
          }
          loader={async ({ params }) => {
            const { id } = params
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts/${id}`
            )
            if (!response.ok) {
              throw new Response('Not Found', { status: 404 })
            } else {
              const data = await response.json()
              return data
            }
          }}
        />
        <Route path="/protect" element={<Protect />} />
      </Route>
    </Routes>
  )
}
