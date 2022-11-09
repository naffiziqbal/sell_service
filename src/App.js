import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/LogIn/Login';
import ServiceDetails from './Components/Services/ServiceDetails/ServiceDetails';
import Myreviews from './Components/PrivateRoute/MyReviews/Myreviews';
import AddService from './Components/PrivateRoute/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        { path: '/', element: <Home />, loader: () => fetch('https://cinemawala.vercel.app/limitServices') },
        { path: '/services', element: <Services />, loader: () => fetch('https://cinemawala.vercel.app/services') },
        { path: '/services/:id', element: <ServiceDetails />, loader: ({ params }) => fetch(`https://cinemawala.vercel.app/services/${params.id}`) },
        { path: '/signup', element: <SignUp /> },
        { path: '/login', element: <Login /> },
        { path: '/blog', element: <Blog /> },
        { path: '/userreviews', element: <PrivateRoute><Myreviews /></PrivateRoute> },
        { path: '/addservice', element: <PrivateRoute><AddService /></PrivateRoute> },
        {path : '*', element: <div className='text-3xl text-center text-red-600 font-bold max-h-fit my-80'>404 Error</div>}
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
