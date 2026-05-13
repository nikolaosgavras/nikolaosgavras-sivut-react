import './App.css'
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { AppLayout } from './components/AppLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { HomePage } from './pages/HomePage';
/* const Services = () => <h1>Services</h1> */
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
