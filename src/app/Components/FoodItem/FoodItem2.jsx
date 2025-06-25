"use client";
import { useState } from "react";
import Image from "next/image";
import FoodItemCard from "../Card/FoodItemCard";

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
      style={{ backgroundColor: "white" }}
    >
      {/* Mobile: Category Dropdown */}
      <div className="d-md-none mb-4 px-3">
        <select
          className="form-select"
          value={isActive}
          onChange={(e) => setIsActive(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {/* Left Menu (tablet and up) */}
        <div
          className="col-md-2 d-none d-md-block position-sticky"
          style={{ top: "80px", alignSelf: "flex-start" }}
        >
          <ul className="list-group">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`list-group-item list-group-item-action ${
                  isActive === cat ? "active" : ""
                }`}
                onClick={() => setIsActive(cat)}
                style={{ cursor: "pointer" }}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Center Items */}
        <div className="col-12 col-md-7">
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 mb-4">
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

        {/* Right Deal Banner (tablet and up) */}
        <div className="col-md-3 d-none d-md-block">
          <div className="">
            <Image
              src="/assets/Images/Deals/1.jpg"
              alt="Deal 1"
              className="img-fluid"
              width={500}
              height={600}
            />
          </div>
          <div className="mt-3">
            <Image
              src="/assets/Images/Deals/1.jpg"
              alt="Deal 1"
              className="img-fluid"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Mobile: Deal Banners */}
      <div className="d-md-none mt-5 text-center">
        <h5>Ongoing Deals</h5>
        <Image
          src="/assets/Images/Deals/1.jpg"
          alt="Deal 1"
          className="img-fluid my-3"
          width={300}
          height={150}
        />
        <Image
          src="/assets/Images/Deals/1.jpg"
          alt="Deal 2"
          className="img-fluid mb-3"
          width={300}
          height={150}
        />
      </div>
    </section>
  );
};

export default FoodItem2;
