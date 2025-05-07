import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store, persistor } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';

import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <BrowserRouter> 
          <ClerkProvider 
          publishableKey={PUBLISHABLE_KEY} 
          afterSignOutUrl='/'
          appearance={{
            baseTheme: dark,
            }} 
          >
            <App />
          </ClerkProvider>
        </BrowserRouter>
      </StrictMode>
    </PersistGate>
  </Provider>
  ,
)
