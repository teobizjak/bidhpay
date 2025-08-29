import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Nav from './Nav.jsx';

const router = createBrowserRouter([
    {
      path: "/bidhpay/", element:<><Nav/><Home/></> 
    },
    {
      path:"/contact", element: <Contact />
    }
  ]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
