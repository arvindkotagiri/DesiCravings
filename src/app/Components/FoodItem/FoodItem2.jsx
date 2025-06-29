// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import FoodItemCard from "../Card/FoodItemCard";

// import {
//   dcAppetizersItems,
//   dcBreakfastItems,
//   dcCurryItems,
//   dcDessertItems,
//   dcDrinktItems,
//   dcEntreesItems,
//   dcIndoChineseItems,
//   dcPulavItems,
//   dcSnackItems,
//   dcThaaliItems,
// } from "./FoodItems";

// const categories = [
//   "Breakfast",
//   "Snacks",
//   "Thali",
//   "Appetizers",
//   "Entrees",
//   "Curries",
//   "Pulav",
//   "IndoChinese",
//   "Drinks",
//   "Desserts",
// ];

// const getItemsForCategory = (cat) => {
//   switch (cat) {
//     case "Breakfast":
//       return dcBreakfastItems;
//     case "Snacks":
//       return dcSnackItems;
//     case "Thali":
//       return dcThaaliItems;
//     case "Appetizers":
//       return dcAppetizersItems;
//     case "Entrees":
//       return dcEntreesItems;
//     case "Curries":
//       return dcCurryItems;
//     case "Pulav":
//       return dcPulavItems;
//     case "IndoChinese":
//       return dcIndoChineseItems;
//     case "Drinks":
//       return dcDrinktItems;
//     case "Desserts":
//       return dcDessertItems;
//     default:
//       return [];
//   }
// };

// const FoodItem2 = () => {
//   const [isActive, setIsActive] = useState("Breakfast");
//   const items = getItemsForCategory(isActive);

//   return (
//     <section
//       className="container-fluid py-5"
//       style={{ backgroundColor: "white" }}
//     >
//       {/* Mobile: Category Dropdown */}
//       <div className="d-md-none mb-4 px-3">
//         <select
//           className="form-select"
//           value={isActive}
//           onChange={(e) => setIsActive(e.target.value)}
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="row">
//         {/* Left Menu (tablet and up) */}
//         <div
//           className="col-md-2 d-none d-md-block position-sticky"
//           style={{ top: "80px", alignSelf: "flex-start" }}
//         >
//           <ul className="list-group">
//             {categories.map((cat) => (
//               <li
//                 key={cat}
//                 className={`list-group-item list-group-item-action ${
//                   isActive === cat ? "active" : ""
//                 }`}
//                 onClick={() => setIsActive(cat)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Center Items */}
//         <div className="col-12 col-md-7">
//           <div className="row">
//             {items.map((item, index) => (
//               <div key={index} className="col-12 col-sm-6 mb-4">
//                 <FoodItemCard
//                   img={item.img}
//                   title={item.title}
//                   content={item.content}
//                   price={item.price}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Deal Banner (tablet and up) */}
//         <div className="col-md-3 d-none d-md-block">
//           <div className="">
//             <Image
//               src="/assets/Images/Deals/1.jpg"
//               alt="Deal 1"
//               className="img-fluid"
//               width={500}
//               height={600}
//             />
//           </div>
//           <div className="mt-3">
//             <Image
//               src="/assets/Images/Deals/1.jpg"
//               alt="Deal 1"
//               className="img-fluid"
//               width={500}
//               height={600}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile: Deal Banners */}
//       <div className="d-md-none mt-5 text-center">
//         <h5>Ongoing Deals</h5>
//         <Image
//           src="/assets/Images/Deals/1.jpg"
//           alt="Deal 1"
//           className="img-fluid my-3"
//           width={300}
//           height={150}
//         />
//         <Image
//           src="/assets/Images/Deals/1.jpg"
//           alt="Deal 2"
//           className="img-fluid mb-3"
//           width={300}
//           height={150}
//         />
//       </div>
//     </section>
//   );
// };

// export default FoodItem2;

"use client";
import { useState } from "react";
import Image from "next/image";

import {
  dcAppetizersItems,
  dcBreakfastItems,
  dcCurryItems,
  dcDessertItems,
  dcDrinktItems,
  dcEntreesItems,
  dcIndoChineseItems,
  dcPulavItems,
  dcSnackItems,
  dcThaaliItems,
} from "./FoodItems";

const categories = [
  "Breakfast",
  "Snacks",
  "Thali",
  "Appetizers",
  "Entrees",
  "Curries",
  "Pulav",
  "IndoChinese",
  "Drinks",
  "Desserts",
];

const getItemsForCategory = (cat) => {
  switch (cat) {
    case "Breakfast":
      return dcBreakfastItems;
    case "Snacks":
      return dcSnackItems;
    case "Thali":
      return dcThaaliItems;
    case "Appetizers":
      return dcAppetizersItems;
    case "Entrees":
      return dcEntreesItems;
    case "Curries":
      return dcCurryItems;
    case "Pulav":
      return dcPulavItems;
    case "IndoChinese":
      return dcIndoChineseItems;
    case "Drinks":
      return dcDrinktItems;
    case "Desserts":
      return dcDessertItems;
    default:
      return [];
  }
};

const FoodItem2 = () => {
  const [isActive, setIsActive] = useState("Breakfast");
  const items = getItemsForCategory(isActive);

  return (
    <section
      className="container-fluid py-5"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      {/* Sticky Top Dropdown - Mobile */}
      <div
        className="d-md-none sticky-top w-100"
        style={{
          // top: "60px",
          zIndex: 1000,
          backgroundColor: "#C62828",
          padding: "10px 16px",
        }}
      >
        <select
          className="form-select border-0 fw-semibold text-white"
          value={isActive}
          onChange={(e) => setIsActive(e.target.value)}
          style={{
            backgroundColor: "#C62828",
            color: "white",
            fontSize: "1rem",
            padding: "10px",
          }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} style={{ color: "#F4A300" }}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="row mt-4">
        {/* Left Sidebar - Tablet and Above */}
        <div
          className="col-md-2 d-none d-md-block"
          style={{ position: "sticky", top: "100px", alignSelf: "flex-start" }}
        >
          <ul className="list-group border-0">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`list-group-item border-0 rounded-0 ${
                  isActive === cat ? "active" : ""
                }`}
                onClick={() => setIsActive(cat)}
                style={{
                  cursor: "pointer",
                  backgroundColor: isActive === cat ? "#F4A300" : "transparent",
                  color: isActive === cat ? "#fff" : "#212121",
                  fontWeight: 600,
                  padding: "12px 16px",
                  borderLeft: isActive === cat ? "5px solid #C62828" : "5px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Menu Items */}
        <div className="col-12 col-md-7">
          <div className="row">
            {items.length === 0 ? (
              <div className="col-12 text-center text-muted fs-5 mt-4">
                No items found in this category.
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 mb-4"
                >
                  <div
                    className="d-flex flex-column flex-sm-row align-items-start gap-3 p-3 rounded shadow-sm h-100"
                    style={{
                      backgroundColor: "#ffffff",
                      position: "relative",
                      minHeight: "140px",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded"
                      style={{ objectFit: "cover", flexShrink: 0 }}
                    />
                    <div className="flex-grow-1">
                      <h5
                        className="fw-bold mb-2"
                        style={{ color: "#212121", wordBreak: "break-word" }}
                      >
                        {item.title}
                      </h5>
                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                        {item.content}
                      </p>
                    </div>
                    <div
                      className="position-absolute"
                      style={{
                        right: "16px",
                        bottom: "16px",
                        color: "#C62828",
                        fontWeight: 700,
                      }}
                    >
                      {item.price}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side Deals */}
        <div className="col-md-3 d-none d-md-block">
          <Image
            src="/assets/Images/Deals/1.jpg"
            alt="Deal 1"
            className="img-fluid rounded shadow-sm"
            width={500}
            height={600}
          />
          <Image
            src="/assets/Images/Deals/1.jpg"
            alt="Deal 2"
            className="img-fluid rounded shadow-sm mt-3"
            width={500}
            height={600}
          />
        </div>
      </div>

      {/* Mobile: Deals Below */}
      <div className="d-md-none mt-5 text-center px-3">
        <h5 className="mb-3" style={{ color: "#C62828", fontWeight: 700 }}>
          Ongoing Deals
        </h5>
        <Image
          src="/assets/Images/Deals/1.jpg"
          alt="Deal 1"
          className="img-fluid rounded shadow-sm mb-3"
          width={300}
          height={150}
        />
        <Image
          src="/assets/Images/Deals/1.jpg"
          alt="Deal 2"
          className="img-fluid rounded shadow-sm"
          width={300}
          height={150}
        />
      </div>
    </section>
  );
};

export default FoodItem2;
