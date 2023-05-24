
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import router from './Routes/Routes';
import Navbar from './Pages/Home/Navbar';



function App() {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <RouterProvider router={router} >
        <Main>

        </Main>
      </RouterProvider>
    </div>
  );
}

export default App;
