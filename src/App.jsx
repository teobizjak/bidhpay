import { useEffect, useState } from 'react';
import './App.css'
import "./i18n"
import { useTranslation } from 'react-i18next';
import Home from './Home';
import Nav from './Nav';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Contact from './Contact';


function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/", element: <Home/>},
      {path:"/contact", element: <Contact />
    }
  ])

  


  return (
    <>
    
      <div className=' pt-4 md:pt-12'></div>
      <Nav t={t} i18n={i18n} />
      <RouterProvider router={router}/>

    </>
  )
}

export default App
