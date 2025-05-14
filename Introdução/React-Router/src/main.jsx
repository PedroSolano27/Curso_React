import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route, Navigate} from "react-router-dom";
import './index.css'
import App from './App.jsx'                         // Página Principal
import Contact from './component/Contact.jsx';      // Página de Contato
import ErrorPage from './component/ErrorPage.jsx';  // Página de Erro
import Home from './component/Home.jsx';            // Página Home
import Products from './component/Products.jsx';    // Página de Produtos
import Search from './component/Search.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "products/:id",
        element: <Products/>,
      },
      {
        path: "search",
        element: <Search/>
      },
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ]
  }  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);