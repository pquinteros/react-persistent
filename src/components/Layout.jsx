import { NavLink, Outlet } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Layout() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
          LOGO
          <div className="w-full md:block md:w-auto flex" id="navbar-solid-bg">
            <ul className="flex w-full md:w-max items-center justify-center font-bold mt-4 rounded-lg space-x-1 bg-transparent">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition-colors p-4 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition-colors p-4 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition-colors p-4 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/protect"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition-colors p-4 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Protect
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tank"
                  className={({ isActive }) =>
                    `text-white hover:text-gray-300 transition-colors p-4 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Tank
                </NavLink>
              </li>
              <li className='pl-3'>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">Sign in</SignInButton>
                </SignedOut>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="px-4 py-8">
        <Outlet />
      </main>
    </>
  )
}