
import { Form } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import {Routes, Route} from "react-router-dom";
import Footer from './Pages/Home/Footer';
import Banner from './Pages/Home/Banner';
import SignIn from './Pages/SignInUp/SignIn';
import SignUp from './Pages/SignInUp/SignUp';
import About from './Pages/About/About';



function App() {
  return (
    <div>
      <Navbar></Navbar>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        
      </Routes>
  
      <Banner></Banner>

    <Footer></Footer>
    </div>
  );
}

export default App;
