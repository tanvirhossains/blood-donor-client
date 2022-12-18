import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import fluoride from '../../assets/images/fluoride.png'
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';


const Services = () => {
    return (
        <div className='mt-24 px-12' >
            <p className='uppercase text-center text-secondary'>Our Services</p>
            <h1 className='text-center text-2xl mb-10'>Service We Provide</h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service title='Fluoride Treatment' img={fluoride} ></Service>
                <Service title='Cavity Filling' img={cavity} ></Service>
                <Service title='Teeth Whitening' img={whitening} ></Service>

            </div>

            <div class="hero min-h-screen  ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Stated</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;