import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
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

export default App