"use client";
import { useState } from "react";
import FoodItemCard from "../Card/FoodItemCard";
import Image from "next/image";
// import Marquee from "react-fast-marquee";

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

  // Marquee Item List
  // const items = [
  //             "TIFFINS",
  //             "THAALI",
  //             "PULAV",
  //             "NOODLES",
  //             "APPETIZERS",
  //             "SNACKS",
  //             "CURRIES",
  //             "DESSERTS"
  //         ];

  return (
    <section className="food-menu-section fix section-padding">
      <div className="burger-shape">
        <Image
          src="/assets/img/shape/burger-shape.png"
          alt="img"
          width={148}
          height={160}
        />
      </div>
      <div className="fry-shape">
        <Image
          src="/assets/img/shape/fry-shape.png"
          alt="img"
          width={137}
          height={158}
        />
      </div>
      <div className="food-menu-wrapper style1">
        <div className="container">
          <div className="food-menu-tab-wrapper style-bg">
            <div className="title-area">
              <div
                className="sub-title text-center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Image
                  className="me-1"
                  src="/assets/img/icon/titleIcon.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
                FOOD MENU
                <Image
                  className="ms-1"
                  src="/assets/img/icon/titleIcon.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
              </div>
              {/* <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Desi Cravings Menu
                        </h2> */}
            </div>

            <div className="food-menu-tab">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li
                  className={`nav-item ${
                    isActive === "Breakfast" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Breakfast")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Breakfast-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Breakfast"
                    type="button"
                    role="tab"
                    aria-controls="pills-Breakfast"
                    aria-selected="true"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_1.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Breakfast
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "Snacks" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Snacks")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Snacks-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Snacks"
                    type="button"
                    role="tab"
                    aria-controls="pills-Snacks"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_2.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Fresh Snacks
                  </button>
                </li>
                <li
                  className={`nav-item ${isActive === "Thali" ? "active" : ""}`}
                  onClick={() => setIsActive("Thali")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Thali-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Thali"
                    type="button"
                    role="tab"
                    aria-controls="pills-Thali"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Thali
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "Appetizers" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Appetizers")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Appetizers-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Appetizers"
                    type="button"
                    role="tab"
                    aria-controls="pills-Appetizers"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Appetizers
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "Entrees" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Entrees")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Entrees-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Entrees"
                    type="button"
                    role="tab"
                    aria-controls="pills-Entrees"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Entrees
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "Curries" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Curries")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Curries-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Curries"
                    type="button"
                    role="tab"
                    aria-controls="pills-Curries"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Curries
                  </button>
                </li>
                <li
                  className={`nav-item ${isActive === "Pulav" ? "active" : ""}`}
                  onClick={() => setIsActive("Pulav")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Pulav-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Pulav"
                    type="button"
                    role="tab"
                    aria-controls="pills-Pulav"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Pulav
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "IndoChinese" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("IndoChinese")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-IndoChinese-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-IndoChinese"
                    type="button"
                    role="tab"
                    aria-controls="pills-IndoChinese"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Indo-Chinese
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "Drinks" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("Drinks")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-Drinks-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Drinks"
                    type="button"
                    role="tab"
                    aria-controls="pills-Drinks"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_3.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Drinks
                  </button>
                </li>
                <li
                  className={`nav-item ${
                    isActive === "desserts" ? "active" : ""
                  }`}
                  onClick={() => setIsActive("desserts")}
                  role="presentation"
                >
                  <button
                    className="nav-link"
                    id="pills-desserts-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-desserts"
                    type="button"
                    role="tab"
                    aria-controls="pills-desserts"
                    aria-selected="false"
                  >
                    <Image
                      src="/assets/img/menu/menuIcon1_4.png"
                      alt="img"
                      width={36}
                      height={36}
                    />
                    Sweets and Hot
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane ${
                    isActive === "Breakfast" ? "active" : ""
                  }`}
                  id="pills-Breakfast"
                  role="tabpanel"
                  aria-labelledby="pills-Breakfast-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcBreakfastItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "Snacks" ? "active" : ""
                  }`}
                  id="pills-Snacks"
                  role="tabpanel"
                  aria-labelledby="pills-Snacks-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcSnackItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${isActive === "Thali" ? "active" : ""}`}
                  id="pills-Thali"
                  role="tabpanel"
                  aria-labelledby="pills-Thali-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcThaaliItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "Appetizers" ? "active" : ""
                  }`}
                  id="pills-Appetizers"
                  role="tabpanel"
                  aria-labelledby="pills-Appetizers-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcAppetizersItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "Entrees" ? "active" : ""
                  }`}
                  id="pills-Entrees"
                  role="tabpanel"
                  aria-labelledby="pills-Entrees-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcEntreesItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "Curries" ? "active" : ""
                  }`}
                  id="pills-Curries"
                  role="tabpanel"
                  aria-labelledby="pills-Curries-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcCurryItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${isActive === "Pulav" ? "active" : ""}`}
                  id="pills-Pulav"
                  role="tabpanel"
                  aria-labelledby="pills-Pulav-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcPulavItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "IndoChinese" ? "active" : ""
                  }`}
                  id="pills-IndoChinese"
                  role="tabpanel"
                  aria-labelledby="pills-IndoChinese-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcIndoChineseItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "Drinks" ? "active" : ""
                  }`}
                  id="pills-Drinks"
                  role="tabpanel"
                  aria-labelledby="pills-Drinks-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcDrinktItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
                <div
                  className={`tab-pane ${
                    isActive === "desserts" ? "active" : ""
                  }`}
                  id="pills-desserts"
                  role="tabpanel"
                  aria-labelledby="pills-desserts-tab"
                  tabIndex="0"
                >
                  <div className="row gx-4 gy-4">
                    {dcDessertItems.map((item, index) => (
                      <div className="col-lg-6 col-12" key={index}>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="marquee-wrapper-custom">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {items.map((item, index) => (
          <span key={index} className="text-slider-item">
            {item}
          </span>
        ))}
      </Marquee>
    </div> */}
    </section>
  );
};

export default FoodItem1;
