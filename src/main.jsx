import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import "./i18n"
import { useTranslation } from 'react-i18next';


import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';
import Terms from './Terms';
import Privacy from './Privacy';
import { useEffect } from 'react';
import Footer from './Footer';

function App() {
    const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);
  return (
    <BrowserRouter>
      <Nav t={t} i18n={i18n} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bidhpay/" element={<Home />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/terms/" element={<Terms />} />
        <Route path="/privacyPolicy/" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer t={t}/>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);