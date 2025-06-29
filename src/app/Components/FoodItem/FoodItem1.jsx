// "use client";
// import { useState } from "react";
// import FoodItemCard from "../Card/FoodItemCard";
// import Image from "next/image";

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

// const FoodItem1 = () => {
//   const [isActive, setIsActive] = useState("Breakfast");

//   const categories = [
//     { key: "Breakfast", label: "Breakfast", icon: "/assets/Images/Menu Icons/breakfast.jpg" },
//     { key: "Snacks", label: "Fresh Snacks", icon: "/assets/Images/Menu Icons/snacks.jpg" },
//     { key: "Thali", label: "Thali", icon: "/assets/Images/Menu Icons/thali.jpg" },
//     { key: "Appetizers", label: "Appetizers", icon: "/assets/Images/Menu Icons/appetizers.jpg" },
//     { key: "Entrees", label: "Entrees", icon: "/assets/Images/Menu Icons/entrees.jpg" },
//     { key: "Curries", label: "Curries", icon: "/assets/Images/Menu Icons/curries.jpg" },
//     { key: "Pulav", label: "Pulav", icon: "/assets/Images/Menu Icons/pulavs.jpg" },
//     { key: "IndoChinese", label: "Indo-Chinese", icon: "/assets/Images/Menu Icons/indoChinese.jpg" },
//     { key: "Drinks", label: "Drinks", icon: "/assets/Images/Menu Icons/drinks.jpg" },
//     { key: "desserts", label: "Sweets and Hot", icon: "/assets/Images/Menu Icons/desserts.jpg" },
//   ];

//   // Map active tab key to the data array
//   const dataMap = {
//     Breakfast: dcBreakfastItems,
//     Snacks: dcSnackItems,
//     Thali: dcThaaliItems,
//     Appetizers: dcAppetizersItems,
//     Entrees: dcEntreesItems,
//     Curries: dcCurryItems,
//     Pulav: dcPulavItems,
//     IndoChinese: dcIndoChineseItems,
//     Drinks: dcDrinktItems,
//     desserts: dcDessertItems,
//   };

//   return (
//     <section
//       className="food-menu-section fix section-padding"
//       style={{ backgroundColor: "#FFF8F0", padding: "60px 0" }}
//     >
//       <div className="container">
//         <div className="title-area text-center mb-5">
//           <div
//             className="sub-title d-inline-flex align-items-center gap-2 mb-3"
//             style={{ color: "#F4A300", fontWeight: 600 }}
//           >
//             Desi Cravings
//           </div>
//           {/* Optional title here if needed */}
//           <h2 className="title" style={{ fontWeight: "700", color: "#C62828" }}>
//             Our Menu
//           </h2>
//         </div>

//         {/* Tabs */}
//         <ul
//           className="nav nav-pills flex-wrap justify-content-center gap-3 mb-5"
//           role="tablist"
//           style={{ cursor: "pointer" }}
//         >
//           {categories.map(({ key, label, icon }) => (
//             <li
//               key={key}
//               className={`nav-item ${isActive === key ? "active" : ""}`}
//               onClick={() => setIsActive(key)}
//               role="presentation"
//               style={{ minWidth: 120 }}
//             >
//               <div
//                 className={`nav-link d-flex align-items-center gap-2 ${
//                   isActive === key ? "active-tab" : "inactive-tab"
//                 }`}
//                 style={{
//                   borderRadius: 30,
//                   padding: "10px 20px",
//                   fontWeight: 600,
//                   color: isActive === key ? "#C62828" : "#B87333",
//                   backgroundColor: isActive === key ? "#FFF0E0" : "transparent",
//                   transition: "all 0.3s ease",
//                   userSelect: "none",
//                   border: isActive === key ? "2px solid #C62828" : "2px solid transparent",
//                 }}
//               >
//                 <Image src={icon} alt={label} width={32} height={32} />
//                 {label}
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Menu items grid */}
//         <div className="row gx-4 gy-5">
//           {(dataMap[isActive] || []).map((item, idx) => (
//             <div key={idx} className="col-lg-6 col-md-12">
//               <FoodItemCard
//                 img={item.img}
//                 title={item.title}
//                 content={item.content}
//                 price={item.price}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodItem1;


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

// Dummy FoodItemCard Component
const FoodItemCard = ({ img, title, content, price }) => {
  return (
    <div
      className="d-flex align-items-start justify-content-between gap-3 p-3 rounded-4 shadow-sm h-100 flex-column flex-sm-row"
      style={{
        backgroundColor: "#ffffff",
        minHeight: "120px",
        border: "1px solid #eee",
      }}
    >
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <Image
          src={img}
          alt={title}
          width={90}
          height={90}
          className="rounded-3"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Center: Title + Description */}
      <div className="flex-grow-1 px-sm-2 text-start">
        <h6 className="fw-bold mb-1" style={{ color: "#212121" }}>
          {title}
        </h6>
        <p className="mb-0 text-muted small">{content}</p>
      </div>

      {/* Right: Price */}
      <div className="text-sm-end text-start mt-2 mt-sm-0">
        <span className="fw-semibold" style={{ color: "#F4A300" }}>
          {price}
        </span>
      </div>
    </div>
  );
};


const FoodItem1 = () => {
  const [isActive, setIsActive] = useState("Breakfast");

  const categories = [
    { key: "Breakfast", label: "Breakfast", icon: "/assets/Images/Menu Icons/breakfast.jpg" },
    { key: "Snacks", label: "Fresh Snacks", icon: "/assets/Images/Menu Icons/snacks.jpg" },
    { key: "Thali", label: "Thali", icon: "/assets/Images/Menu Icons/thali.jpg" },
    { key: "Appetizers", label: "Appetizers", icon: "/assets/Images/Menu Icons/appetizers.jpg" },
    { key: "Entrees", label: "Entrees", icon: "/assets/Images/Menu Icons/entrees.jpg" },
    { key: "Curries", label: "Curries", icon: "/assets/Images/Menu Icons/curries.jpg" },
    { key: "Pulav", label: "Pulav", icon: "/assets/Images/Menu Icons/pulavs.jpg" },
    { key: "IndoChinese", label: "Indo-Chinese", icon: "/assets/Images/Menu Icons/indoChinese.jpg" },
    { key: "Drinks", label: "Drinks", icon: "/assets/Images/Menu Icons/drinks.jpg" },
    { key: "desserts", label: "Sweets and Hot", icon: "/assets/Images/Menu Icons/desserts.jpg" },
  ];

  const dataMap = {
    Breakfast: dcBreakfastItems,
    Snacks: dcSnackItems,
    Thali: dcThaaliItems,
    Appetizers: dcAppetizersItems,
    Entrees: dcEntreesItems,
    Curries: dcCurryItems,
    Pulav: dcPulavItems,
    IndoChinese: dcIndoChineseItems,
    Drinks: dcDrinktItems,
    desserts: dcDessertItems,
  };

  return (
    <section
      className="food-menu-section fix section-padding"
      style={{ backgroundColor: "#FFF8F0", padding: "60px 0" }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="title-area text-center mb-5 px-3">
          <div
            className="sub-title d-inline-flex align-items-center gap-2 mb-2"
            style={{ color: "#F4A300", fontWeight: 600 }}
          >
            Desi Cravings
          </div>
          <h2
            className="title fw-bold"
            style={{ color: "#C62828", fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}
          >
            Our Menu
          </h2>
        </div>

        {/* Tabs */}
        <ul
          className="nav nav-pills flex-wrap justify-content-center gap-3 mb-5"
          role="tablist"
          style={{ cursor: "pointer" }}
        >
          {categories.map(({ key, label, icon }) => (
            <li
              key={key}
              className={`nav-item ${isActive === key ? "active" : ""}`}
              onClick={() => setIsActive(key)}
              role="presentation"
              style={{ minWidth: 120 }}
            >
              <div
                className={`nav-link d-flex align-items-center gap-2 ${
                  isActive === key ? "active-tab" : "inactive-tab"
                }`}
                style={{
                  borderRadius: 30,
                  padding: "10px 20px",
                  fontWeight: 600,
                  color: isActive === key ? "#C62828" : "#B87333",
                  backgroundColor: isActive === key ? "#FFF0E0" : "transparent",
                  transition: "all 0.3s ease",
                  userSelect: "none",
                  border: isActive === key ? "2px solid #C62828" : "2px solid transparent",
                }}
              >
                <Image src={icon} alt={label} width={32} height={32} />
                {label}
              </div>
            </li>
          ))}
        </ul>

        {/* Menu Items Grid */}
        <div className="row gx-4 gy-4">
          {(dataMap[isActive] || []).map((item, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <FoodItemCard
                img={item.img}
                title={item.title}
                content={item.content}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodItem1;
