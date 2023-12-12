import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Landing from "./components/pages/auth/Landing";
import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Home from "./components/pages/dashboard/Home";
import Todo from "./components/pages/dashboard/Todo";
import DailyTodos from "./components/pages/dashboard/DailyTodos";
import AllTodos from "./components/pages/dashboard/AllTodos";
import CreateTodo from "./components/pages/dashboard/CreateTodo";
import EditTodo from "./components/pages/dashboard/EditTodo";

import editTodoLoader from "./loaders/dashboard/EditTodoLoader";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
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
        path: "All",
        element: <AllTodos />,
      },
      {
        path: "Daily",
        element: <DailyTodos />,
      },
      {
        path: "Create",
        element: <CreateTodo />,
      },
      {
        path: "Edit",
        element: <EditTodo />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default App;
