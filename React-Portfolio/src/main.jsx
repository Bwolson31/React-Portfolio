import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { 
        path: 'about', 
        element: <About /> 
      },
      { 
        path: 'portfolio', 
        element: <Portfolio /> 
      },
      { 
        path: 'resume', 
        element: <Resume /> 
      },
      { 
        path: 'contact', 
        element: <Contact /> 
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)