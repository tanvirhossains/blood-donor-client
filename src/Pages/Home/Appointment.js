import React from 'react';
import doctor from '../../assets/images/doctor.png'
import Button from '../Shared/Button';
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <container style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center' >

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h1 className='text-primary text-2xl font-bold mb-5'>Appointment</h1>
                <h1 className='text-white text-4xl mb-3'>Make an Appointment Today</h1>
                <p className='text-white py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum porro officiis tenetur deserunt maxime eveniet sint vel aliquam voluptates sapiente atque ad iure ducimus, aliquid distinctio, vitae maiores! Adipisci, ducimus. Error eveniet consequatur quaerat suscipit? Ea quam earum porro</p>
                <Button>get started</Button>
            </div>

        </container>
    );
};

export default Appointment;