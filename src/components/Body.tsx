import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

type Props = {};

const Body = (props: Props) => {
  const appRoutes = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/Browse", element: <Browse /> },
  ]);

  return (
    <RouterProvider router={appRoutes}/>
  );
};

export default Body;
