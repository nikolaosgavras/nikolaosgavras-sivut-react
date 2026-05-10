import './App.css'
import { Routes, Route } from 'react-router';
import { AppLayout } from './components/AppLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { HomePage } from './pages/HomePage'

const About = () => <h1>About</h1>
const Services = () => <h1>Services</h1>
const Portfolio = () => <h1>Portfolio</h1>
const Contact = () => <h1>Contact</h1>

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
