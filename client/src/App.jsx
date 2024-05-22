import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
import 'bootstrap/dist/css/bootstrap.css';
import { BasketContextProvider } from './context/basketContext';

const routes = createBrowserRouter(ROUTES)

function App() {

  return (
    <BasketContextProvider>
      <RouterProvider router={routes} />
      
    </BasketContextProvider>
  )
}

export default App
