import React, { useState } from 'react';
import Footer from '../Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const GetAppointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>

            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default GetAppointment;