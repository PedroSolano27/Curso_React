import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.jsx";
import Home from "./routes/home/Home.jsx";
import Countdown from "./routes/countdown/Countdown.jsx";
import { CountProvider } from "./context/CountContext.jsx";

const  router = createBrowserRouter([                   // Browser de Páginas
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/countdown",
        element: <Countdown/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountProvider>
      <RouterProvider router={router} />
    </CountProvider>
  </StrictMode>,
);