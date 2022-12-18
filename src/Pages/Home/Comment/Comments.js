import React from 'react';
import person from '../../../Assets/person.jpeg'
import quote from '../../../Assets/quote.svg'
import Comment from './Comment';

const Comments = () => {
    const comments = [
        {
            _id: 1,
            name: 'Mohammad Abdullah ',
            comments: 'this is lorem dj',
            image: person
        },
        {
            _id: 2,
            name: 'Mohammad Abdullah ',
            comments: 'this is lorem dj',
            image: person
        },
        {
            _id: 3,
            name: 'Mohammad Abdullah ',
            comments: 'this is lorem dj',
            image: person
        },
        {
            _id: 4,
            name: 'Mohammad Abdullah ',
            comments: 'this is lorem dj',
            image: person
        },
    ]

    return (
        <section className='my-28 mx-14'>

            <div className='flex justify-between'>
                <div>
                    <h4 className="text-5xl text-red-700 font-bold">Comments</h4>
                    <h2 className='text-3xl'>What our Donor said</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48 " alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    comments.map(comment => <Comment
                        key={comments.at}
                        comment={comment}
                    >
                    </Comment>)
                }
            </div>
        </section>
    );
};

export default Comments;