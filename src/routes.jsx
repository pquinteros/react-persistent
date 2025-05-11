import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Protect from './pages/Protect'
import Tank from './pages/Tank'

const Blog = lazy(() => import('./pages/Blog'))
const Post = lazy(() => import('./pages/Post'))

import { postLoader, postsLoader } from './loaders/postLoaders'

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/about", 
        element: <About /> 
      },
      {
        path: "/blog",
        element: <Suspense fallback={<div>Loading...</div>}><Blog /></Suspense>,
        loader: postsLoader
      },
      {
        path: "/blog/:id",
        element: <Suspense fallback={<div>Loading...</div>}><Post /></Suspense>,
        loader: postLoader
      },
      { 
        path: "/protect", 
        element: <Protect /> 
      },
      { 
        path: "/tank", 
        element: <Tank /> 
      },
    ]
  }
]
