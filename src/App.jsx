import "./App.css";

import React, { useState } from "react";
import RootPage from "./pages/RootPage";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const pageSize = 5;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: (
            <News
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          ),
        },
        {
          path: "business",
          element: (
            <News
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          ),
        },
        {
          path: "entertainment",
          element: (
            <News
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          ),
        },
        {
          path: "general",
          element: (
            <News
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          ),
        },
        {
          path: "health",
          element: (
            <News
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          ),
        },
        {
          path: "science",
          element: (
            <News
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          ),
        },
        {
          path: "sports",
          element: (
            <News
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          ),
        },
        {
          path: "technology",
          element: (
            <News
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
