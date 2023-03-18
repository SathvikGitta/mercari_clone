import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ChildHeader from './Components/layouts/ChildHeader'
import Men from './Components/pages/Men';
import Women from './Components/pages/Women';
import Kids from './Components/pages/Kids';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ChildHeader />
      },
      {
        path: "men",
        element: <Men />
      },
      {
        path: "women",
        element: <Women />
      },
      {
        path: "Kids",
        element: <Kids />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
