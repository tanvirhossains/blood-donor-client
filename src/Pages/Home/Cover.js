
import React from 'react';
import cover from '../../Assets/cover.jpg';
import './Home.css'
import Navbar from './Navbar';



const Cover = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div class='cover pt-24 hero  ' style={{ backgroundImage: `url(${cover})` }}>

                <div className=''>


                    <div class="hero-content flex-col lg:flex-row">

                        <div>
                            <h1 class="text-5xl font-bold">Wellcome To! <span className='text-white '>Find Blood</span></h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </p>
                            <button class="btn btn-primary">Join with us</button>
                        </div>
                        <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />

                    </div>

                </div>


            </div>
            {/* <img src={cover} className="h-full w-full" /> */}


        </div>
    );
};

export default Cover;