import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
import 'bootstrap/dist/css/bootstrap.css';

const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  )
}

export default App
