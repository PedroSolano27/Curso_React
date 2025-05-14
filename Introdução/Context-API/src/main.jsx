import "./index.css";
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterProvider } from "./context/CounterContext.jsx";
import { TitleColorProvider } from "./context/TitleColorContext.jsx";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      }
    ]
  }  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <TitleColorProvider>
      <CounterProvider>

        <RouterProvider router={router} />

      </CounterProvider>
    </TitleColorProvider>

  </StrictMode>,
);