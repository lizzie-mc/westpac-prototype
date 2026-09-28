import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import Dashboard from './screens/Dashboard'
import Home from './screens/Home'
import Login from './screens/Login'
import Passkey from './screens/Passkey'

export default function App() {
  const location = useLocation()

  return (
    <PhoneFrame>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passkey" element={<Passkey />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </PhoneFrame>
  )
}
