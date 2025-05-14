import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./routes/HomePage/Home.jsx";
import Party from "./routes/PartyPage/Party.jsx";
import NewParty from "./routes/NewPartyPage/NewParty.jsx";
import EditParty from "./routes/EditPage/EditParty.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/party/:id",
        element: <Party/>
      },
      {
        path: "/party/new",
        element: <NewParty/>
      },
      {
        path: "/party/edit/:id",
        element: <EditParty/>
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);