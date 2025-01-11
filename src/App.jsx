import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Listings from './pages/Listings'
import Contact from './pages/Contact'
import Agents from './pages/Agents'


function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
          {index:true , element:<Home/>},
          {path:'about' , element:<About/>},
          {path:'projects' , element:<Projects/>},
          {path:'agents' , element:<Agents/>},
          {path:'services' , element:<Services/>},
          {path:'listings' , element:<Listings/>},
          {path:'contact' , element:<Contact/>}
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
