import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Landing from "./components/pages/opening/Landing";
import Register from "./components/pages/opening/Register";
import Login from "./components/pages/opening/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Home from "./components/pages/dashboard/Home";
import Todo from "./components/pages/dashboard/Todo";
import Profile from "./components/pages/dashboard/Profile";

import registerAction from "./actions/RegisterAction";
import loginAction from "./actions/LoginAction";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Todo />,
      },
      {
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
