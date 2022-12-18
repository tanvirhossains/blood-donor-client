import React from 'react';

const InfoCard = ({ img, title, back }) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl text-white font-bold ${back} p-5 `}>
                <figure><img src={img} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title ">{title}</h2>
                    <p>Click the button to watch on Jetflix app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;