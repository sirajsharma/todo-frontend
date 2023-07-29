import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login, Todos } from "./pages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Todos />,
  },
]);

const App: React.FC<Record<string, never>> = () => (
  <RouterProvider router={router} />
);

export default App;
