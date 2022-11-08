import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home />, loader: () => fetch('http://localhost:5000/limitServices') },
        { path: '/services', element: <Services />, loader: () => fetch('http://localhost:5000/services') },
        { path: '/services/:id', element: <ServiceDetails />, loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`) },
        { path: '/signup', element: <SignUp /> },
        { path: '/login', element: <Login /> },
      ]
    }
  ])
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
