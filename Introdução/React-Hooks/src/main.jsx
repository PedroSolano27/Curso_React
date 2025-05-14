import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import TestProvider from "./context/TestContext.jsx";

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
    <TestProvider>
      <RouterProvider router={router}/>
    </TestProvider>
  </StrictMode>,
);
