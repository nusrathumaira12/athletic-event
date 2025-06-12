import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/EventDetails/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: 'logIn',
        Component: LogIn
      },
      {
        path: '/events',
        Component: Events
      },
      {
        path: '/events/:id',
        Component: EventDetails
      }
    ]
  },
]);

export default router;