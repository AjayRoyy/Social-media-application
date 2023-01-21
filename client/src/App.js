import Login from "./pages/login/login";
import Register from "./pages/register/register";
import OutletRoute from "./Routes/OutletRoute";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NavigationRoutes from "./Routes/NavigationRoutes";
import "./styles/_style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavigationRoutes>
        <OutletRoute />{" "}
      </NavigationRoutes>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:profileId",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={BrowserRouter} />
    </div>
  );
}

export default App;
