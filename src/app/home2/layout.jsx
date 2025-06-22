import React from 'react';
import Header2 from '../Components/Header/Header2';
import Footer1 from '../Components/Footer/Footer1';
import { Analytics } from '@vercel/analytics/next';

const layout = ({ children }) => {
    return (
        <div className='main-page-area bg-color2'>
            <Header2></Header2>
            {children}
            <Analytics />
            <Footer1></Footer1>
        </div>
    );
};

export default layout;