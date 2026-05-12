import './App.css'
import { Routes, Route } from 'react-router';
import { AppLayout } from './components/AppLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
/* const Services = () => <h1>Services</h1> */
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
{/*           <Route path="/services" element={<Services />} /> */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
