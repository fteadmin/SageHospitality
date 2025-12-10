import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import CommercialDomesticPage from './pages/CommercialDomesticPage.tsx';
import CommercialInternationalPage from './pages/CommercialInternationalPage.tsx';
import ResidentialDomesticPage from './pages/ResidentialDomesticPage.tsx';
import ResidentialInternationalPage from './pages/ResidentialInternationalPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/commercial/domestic" element={<CommercialDomesticPage />} />
        <Route path="/commercial/international" element={<CommercialInternationalPage />} />
        <Route path="/residential/domestic" element={<ResidentialDomesticPage />} />
        <Route path="/residential/international" element={<ResidentialInternationalPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
