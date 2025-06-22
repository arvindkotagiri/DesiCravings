import BreadCumb from '@/app/Components/Common/BreadCumb';
import FoodItem1 from '@/app/Components/FoodItem/FoodItem1';
import Gallery1 from '@/app/Components/Gallery/Gallery1';
import Timer2 from '@/app/Components/Timer/Timer2';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Food Menu"
            ></BreadCumb>   
            <FoodItem1></FoodItem1>
            {/* <Timer2></Timer2>  
            <Gallery1></Gallery1>        */}
    </div>
  );
};

export default page;