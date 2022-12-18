import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
                <div className="flex items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;