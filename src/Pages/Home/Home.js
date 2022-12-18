import React from 'react';
import Footer from '../Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Appointment></Appointment>
           <Testimonial></Testimonial>
           <Footer></Footer>
        </div>
    );
};

export default Home;