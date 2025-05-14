import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./routes/HomePage/Home.jsx";
import NewPost from "./routes/NewPostPage/NewPost.jsx";
import Posts from "./routes/PostPage/Posts.jsx";
import Admin from "./routes/AdminPage/Admin.jsx";
import Edit from "./routes/EditPage/Edit.jsx";

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
        path: "/new",
        element: <NewPost/>
      },
      {
        path: "/posts/:id",
        element: <Posts/>
      },
      {
        path: "/admin",
        element: <Admin/>
      },
      {
        path: "/admin/edit/:id",
        element: <Edit/>
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </StrictMode>,
)
