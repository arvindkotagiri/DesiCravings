import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import Offer2 from '../Components/Offer/Offer2';
import About2 from '../Components/About/About2';
import BestSelling2 from '../Components/BestSelling/BestSelling2';
import CtaBanner1 from '../Components/CtaBanner/CtaBanner1';
import FeatureCategory1 from '../Components/FeatureCategory/FeatureCategory1';
import FoodItem2 from '../Components/FoodItem/FoodItem2';
import FoodItem1 from '../Components/FoodItem/FoodItem1';
import Team2 from '../Components/Team/Team2';
import CtaBanner3 from '../Components/CtaBanner/CtaBanner3';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import Contact1 from '../Components/Contact/Contact1';

const page = () => {
    return (
        <div>
           <HeroBanner2></HeroBanner2> 
           {/* <Offer2></Offer2> */}
           {/* <BestSelling2></BestSelling2> */}
           <CtaBanner1></CtaBanner1>
           {/* <FeatureCategory1></FeatureCategory1> */}
           <FoodItem1></FoodItem1>
           {/* <FoodItem2></FoodItem2> */}
           {/* <Team2></Team2> */}
           <CtaBanner3></CtaBanner3>
           <About2></About2>
           <Testimonial2></Testimonial2>
           {/* <Contact1></Contact1> */}
        </div>
    );
};

export default page;