import React from 'react';
import './Comment.css'



const Comment = ({ comment }) => {


    return (
        <div class="card  w-full h-60 mt-10 bg-base-100 shadow-xl border border-red-700">
            <div class="card-body">
                <div className="flex ">
                    <div class="avatar">
                        <div class="w-20 rounded-full ring ring-red-600 ring-offset-base-100 ring-offset-2">
                            <img src={comment.image} />
                        </div>
                    </div>
                    <h2 className='font-bold text-xl ml-6 '>{comment.name}</h2>

                </div>
                <div class="mt-2 ">
                    <p className='overflow-scroll limit' id='overflowTest'>  a dog chews shoes whose shoes does he choose? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sunt alias eveniet eaque, dolore quod eum iure! Pariatur fuga velit quas aspernatur tenetur suscipit sapiente sunt ut minima. Sequi, ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto amet molestias quis delectus culpa quod at doloremque, id, non ut vel ipsa reiciendis cupiditate maiores laudantium beatae ratione impedit accusantium!</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;