import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvShow from "../pages/TvShow";
import People from "../pages/People";
import Movie from "../pages/Movie";
import Login from "../pages/Login";
import UserProvider from "../context/UserContext";
import Profile from "../pages/Profile";
import TvShowSingle from "../pages/TvShowSingle";
import PeopleSingle from "../pages/PeopleSingle";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <Movie />,
      },
      {
        path: "/tvshow",
        element: <TvShow />,
      },
      {
        path: "/tvshow/:id",
        element: <TvShowSingle />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/people/:id",
        element: <PeopleSingle />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
