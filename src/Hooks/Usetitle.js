import React, { useEffect } from 'react';

const Usetitle = (dynamicTitle) => {
    
    useEffect(()=>{
        document.title = `${dynamicTitle}- Blood Donor`
    },[dynamicTitle])
};

export default Usetitle;