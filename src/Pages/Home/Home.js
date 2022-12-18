import React from 'react';
import BloodBenefit from './BloodBenefit';
import Comment from './Comment/Comment';
import Comments from './Comment/Comments';
import Cover from './Cover';
import CoverText from './CoverText';
import Feedback from './Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <BloodBenefit></BloodBenefit>
            <Comments></Comments>
           
            <Feedback></Feedback>
            


        </div>
    );
};

export default Home;