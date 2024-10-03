import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import PrivateRoutes from './utilities/PrivateRoutes'
import Dashboard from './pages/Dashboard'
import Navigation from './components/Navigation'

function App() {

  return (
    <AuthProvider>
      <Navigation />
      <main
        className='main'
      >
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </AuthProvider>
  )
}

export default App
