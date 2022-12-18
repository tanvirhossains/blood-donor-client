import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">

                <div className=''>
                    <h1 class="text-5xl font-bold">Your new smile start <br /> here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button>get started</Button>
                </div>
                <img src={chair} className="max-w-xl  w-screen  rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;