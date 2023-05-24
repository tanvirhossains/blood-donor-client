import React from 'react';
import Navbar from './src/Pages/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './src/Pages/Home/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;