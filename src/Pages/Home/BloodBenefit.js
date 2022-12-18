import React from 'react';

const BloodBenefit = () => {
    return (
        <section className='my-6 p-24'>
            <div className="text-center">
                <h1 className='text-4xl font-bold'>Only God Believer Can Change the World,  </h1>
                <h1 className='text-3xl font-bold'>Come Forward to help other, By Given <span className='text-red-600'>Blood</span> </h1>
            </div>
            {/* -----------------Card of the */}
            <div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 mx-8'>
                <div class="h-96 relative  card   bg-base-200 shadow-xl ">
                    <div class=" card-body">
                        <div class="mt-2 limit">
                            <p className='text-2xl text-center font-extrabold'>Please <span className='text-red-500 '>Join</span>  with us To Help Blood Finder ! </p>
                            <p className='text-2xl my-7 text-center'>আপনি যদি রক্তদাতা হয়ে থাকেন এবং রক্ত দিয়ে মানুষের পাশে দাড়াতে চান তাহলে আমাদের সাথে যুক্ত হয়ে  মানবতার কল্যাণে এগিয়ে আসুন।</p>
                        </div>
                        <div className=' '>
                            <button className='w-full btn btn-error text-white text-xl font-bold hover:text-black'>Join As a Donor</button>
                        </div>
                    </div>
                </div>
                <div class="card   bg-base-200 shadow-xl ">
                    <div class="card-body">
                        <div class="mt-2 ">
                            <p className='text-2xl text-center font-extrabold'>Please <span className='text-red-500 '>update</span>  your information so that we can know </p>
                            <p className='text-2xl my-7 text-center'>আপনি যদি রক্তদাতা হয়ে থাকেন বা আমাদের সাথে যুক্ত হয়ে  থাকেন তাহলে আপনার তথ্য আপডেট করুন</p>
                        </div>
                        <div className='card-actions justify-center'>
                            <button className='w-full btn btn-error text-white text-xl font-bold hover:text-black'>Join As a Donor</button>
                        </div>
                    </div>
                </div>
                <div class="card   bg-base-200 shadow-xl ">
                    <div class="card-body">
                        <div class="mt-2 ">
                            <p className='text-2xl text-center font-extrabold'>Why You should  donate Blood. <span className='text-red-500 '>update</span>  your information so that we can know </p>

                            <ol style={{ listStyleType: 'lower-alpha' }}>
                                <li>Gooseberry</li>
                                <li>Bore</li>
                                <li>Peaches</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BloodBenefit;