
import { Form } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './Pages/Home/Footer';
import Banner from './Pages/Home/Banner';
import SignIn from './Pages/SignInUp/SignIn';
import SignUp from './Pages/SignInUp/SignUp';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import AdminPanel from './Pages/Dashboard/AdminPanel';
import DonorList from './Pages/Dashboard/DonorList';
import Profile from './Pages/UserProfile/Profile';



function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/dashboard" element={<Dashboard />} >

          <Route index element={<AdminPanel />} />
          <Route path="donorList" element={<DonorList />} />
          <Route path="signin" element={<SignIn />} />
        </Route>


      </Routes>

      <Banner></Banner>

      <Footer></Footer>
    </div>
  );
}

export default App;
