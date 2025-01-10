import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import { Field } from "./pages/Field";
import { Crop } from "./pages/Crop";
import { Staff } from "./pages/Staff";
import { Equipment } from "./pages/Equipment";
import { Log } from "./pages/Log";
import { Vehicle } from "./pages/Vehicle";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/field", element: <Field /> },
        { path: "/crop", element: <Crop /> },
        { path: "/staff", element: <Staff /> },
        { path: "/equipment", element: <Equipment /> },
        { path: "/log", element: <Log /> },
        { path: "/vehicle", element: <Vehicle /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
