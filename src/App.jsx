import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import MenuSection from './components/layout/MenuSection'
import Testimonials from './components/layout/Testimonials'
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


function HomePage() {
  return (
    <div className="font-sans min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <MenuSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App