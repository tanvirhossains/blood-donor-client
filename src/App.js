import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import GetAppointment from './Pages/GetAppointment/GetAppointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import User from './Pages/Dashboard/User';
import RequireAuth from './Pages/ReaquireAuth/RequireAuth';
import RequireAdmin from './Pages/ReaquireAuth/RequireAdmin';
function App() {
  return (
    <div >
      <Navbar></Navbar>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <GetAppointment />
          </RequireAuth>

        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>

        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='users' element={<RequireAdmin>
            <User />
          </RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
