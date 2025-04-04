import { createBrowserRouter } from "react-router";
import ErrorPage from "./components/common/ErrorPage";
import Dashboard from "./components/pages/Dashboard";
import { Home } from "./components/pages/home/Home";
import Profile from "./components/pages/Profile";
import errorList from "./values/errorList";
import { dashboardPath, homePath, profilePath } from "./values/paths";

export default createBrowserRouter([
  {
    path: homePath,
    element: <Home />,
  },
  {
    path: dashboardPath,
    element: <Dashboard />,
  },
  {
    path: profilePath,
    element: <Profile />,
  },
  {
    path: "*",
    element: <ErrorPage error={errorList.notFound} />,
  },
]);
