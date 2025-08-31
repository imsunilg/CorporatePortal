import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { portalRoutes } from "./PortalRoute";
import { userRoutes } from "./UserRoute";

const appRouter = createBrowserRouter([portalRoutes, userRoutes]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
