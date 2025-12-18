import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path :'/',
      element : <><Navbar/><Home/></>
    },
    {
      path : "/login",
      element : <><Navbar/><Login/></>
    },
    {
      path : "/about",
      element : <><Navbar/><About/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
