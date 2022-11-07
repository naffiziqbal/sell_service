import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main/>, children:[
      {path: '/', element:<Home/>, loader: ()=> fetch('http://localhost:5000/courses')}
    ] }
  ])
  return (
    <div className="container mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
