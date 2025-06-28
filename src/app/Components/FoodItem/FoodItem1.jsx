"use client";
import { useState } from "react";
import FoodItemCard from "../Card/FoodItemCard";
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

const FoodItem1 = () => {
  const [isActive, setIsActive] = useState("Breakfast");

  const categories = [
    { key: "Breakfast", label: "Breakfast", icon: "/assets/img/menu/menuIcon1_1.png" },
    { key: "Snacks", label: "Fresh Snacks", icon: "/assets/img/menu/menuIcon1_2.png" },
    { key: "Thali", label: "Thali", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "Appetizers", label: "Appetizers", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "Entrees", label: "Entrees", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "Curries", label: "Curries", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "Pulav", label: "Pulav", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "IndoChinese", label: "Indo-Chinese", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "Drinks", label: "Drinks", icon: "/assets/img/menu/menuIcon1_3.png" },
    { key: "desserts", label: "Sweets and Hot", icon: "/assets/img/menu/menuIcon1_4.png" },
  ];

  // Map active tab key to the data array
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
        <div className="title-area text-center mb-5">
          <div
            className="sub-title d-inline-flex align-items-center gap-2 mb-3"
            style={{ color: "#F4A300", fontWeight: 600 }}
          >
            Desi Cravings
          </div>
          {/* Optional title here if needed */}
          <h2 className="title" style={{ fontWeight: "700", color: "#C62828" }}>
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

        {/* Menu items grid */}
        <div className="row gx-4 gy-5">
          {(dataMap[isActive] || []).map((item, idx) => (
            <div key={idx} className="col-lg-6 col-md-12">
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
