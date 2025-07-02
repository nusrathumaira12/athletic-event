import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/EventDetails/EventDetails";
import PrivateRoute from "../routes/PrivateRoute"
import MyBookings from "../pages/MyBookings/MyBookings";

import ManageEvents from "../pages/ManageEvents/ManageEvents";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import UpdateEvents from "../pages/UpdateEvent/UpdateEvents";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutAthlofy from "../pages/Home/AboutAthlofy";
import Contact from "../../Contacts/Contact";
import Privacy from "../pages/Shared/Privacy";
import Terms from "../pages/Shared/Terms";
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
        path: '/about',
        Component: AboutAthlofy,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/privacy',
        Component: Privacy,
      },
      {
        path: '/terms',
        Component: Terms,
      },
      {
        path: '/events/:id',
        Component: EventDetails,
        loader: ({params})=> fetch(`https://athletic-event-server.vercel.app/events/${params.id}`)
      },
      {
        path: '/create-event',
        element: <PrivateRoute><CreateEvent /></PrivateRoute>
      },
      {
        path: '/myBookings',
        element: <PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path: "/manageEvents",
        element: <PrivateRoute>
          <ManageEvents></ManageEvents>
        </PrivateRoute>
      },
      {
        path: '/create-event',
        element: <PrivateRoute>
          <CreateEvent></CreateEvent>
           </PrivateRoute>
      },
      {
        path: '/updateEvent/:id',
        element: <PrivateRoute>
          <UpdateEvents></UpdateEvents>
        </PrivateRoute>
        
       
      },
      {
        
          path: '*',
          element: <NotFoundPage />
       
        
      }
      
    ]
  },
]);

export default router;