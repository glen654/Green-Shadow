import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { RootLayout } from './components/RootLayout'
import { Dashboard } from './pages/Dashboard'
import { Field } from './pages/Field'
import { Crop } from './pages/Crop'
import { Staff } from './pages/Staff'
import { Equipment } from './pages/Equipment'
import { Log } from './pages/Log'
import { Vehicle } from './pages/Vehicle'

function App() {
  const routes = createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      children:[
        {path: '', element: <Dashboard/>},
        {path: '', element: <Field/>},
        {path: '', element: <Crop/>},
        {path: '', element: <Staff/>},
        {path: '', element: <Equipment/>},
        {path: '', element: <Log/>},
        {path: '', element: <Vehicle/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
