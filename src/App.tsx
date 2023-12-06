import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/App/Dashboard";
import Home from "./pages/App/components/Home";
import Impact from "./pages/App/components/Impact";
import Marketplace from "./pages/App/components/Marketplace";
import Events from "./pages/App/components/Events";

function NoMatch() {
  return (
    <div className=" flex flex-col items-center justify-center mt-24 text-4xl">
      <h2>404: Page Not Found</h2>
      <p>Uh oh! Wrong page 😞</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
  {
    path: "/app",
    element: <Dashboard />,
    children: [
      {
        path: "/app",
        element: <Home />,
      },
      {
        path: "/app/impact",
        element: <Impact />,
      },
      {
        path: "/app/marketplace",
        element: <Marketplace />,
      },
      {
        path: "/app/events",
        element: <Events />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
