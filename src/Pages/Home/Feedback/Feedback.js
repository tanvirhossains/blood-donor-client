import React from 'react';

const Feedback = () => {
    return (
        <div>
            <div className="hero min-h-fit" style={{
                backgroundImage: `url("https://placeimg.com/1000/800/arch")`
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div class="card w-full ">
                            <div class="card-body">
                                <h2 class="card-title text-4xl justify-center  p-5 rounded-2xl">Give your Feedback!!</h2>
                                <div class="card-actions justify-center">
                                    <label class="input-group ">
                                        <span className='bg-red-600 w-24 justify-center font-bold   '>Email</span>
                                        <input type="email" placeholder="your_email@gmail.com" class="input input-bordered text-stone-700 w-full" />
                                    </label>
                                    <label class="input-group flex  md:flex-wrap lg:flex-nowrap ">
                                        <span className='bg-red-600 w-20 justify-center font-bold'>Subject</span>
                                        <textarea class="textarea textarea-error text-stone-700 w-full max-h-16 font-bold" placeholder="Your Subject"></textarea>
                                    </label>
                                    <label class="input-group font-bold ">
                                        <span className=' bg-red-600 w-20 justify-center'>Massage</span>
                                        <textarea class="textarea textarea-error text-stone-700 w-full max-h-44" placeholder="Your Massage"></textarea>
                                    </label>
                                    <button class="btn btn-primary w-full">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;