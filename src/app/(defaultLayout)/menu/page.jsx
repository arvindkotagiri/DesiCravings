import BreadCumb from "@/app/Components/Common/BreadCumb";
import FoodItem2 from "@/app/Components/FoodItem/FoodItem2";
import Gallery1 from "@/app/Components/Gallery/Gallery1";
import Timer2 from "@/app/Components/Timer/Timer2";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/Images/breadcumb.jpg"
        Title="Food Menu"
      ></BreadCumb>
      <FoodItem2></FoodItem2>
      {/* <Timer2></Timer2>  
            <Gallery1></Gallery1>        */}
    </div>
  );
};

export default page;
