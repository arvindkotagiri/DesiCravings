"use client"
import { useState } from "react";
import FoodItemCard from "../Card/FoodItemCard";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const FoodItem1 = () => {
    const [isActive, setIsActive] = useState('Breakfast');

 const dcBreakfastItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Idli",
    content: "Soft, fluffy cakes made from fermented rice and black lentils batter.",
    price: "$6.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Plain Dosa",
    content: "Thin, crispy crepe made from fermented rice and lentil batter.",
    price: "$8.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Masala Dosa",
    content: "Thin, crispy dosa filled with a mildly spiced potato and onion mixture, served with sides of savory peanut chutney.",
    price: "$9.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Onion Dosa",
    content: "Deliciously crisp crepe filled with finely chopped onions and a hint of spice.",
    price: "$9.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Ghee Karam Masala Dosa",
    content: "Crispy dosa with ghee and spicy karam masala, offering a delightful blend of flavors for a satisfying start.",
    price: "$11.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Double Egg Dosa",
    content: "Savory crepe with crispy edges, filled with spiced double scrambled eggs bursting with flavor.",
    price: "$11.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Ghee Karam Idli",
    content: "Delicious steamed rice cakes covered in aromatic clarified butter with a hint of spice.",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Poori & Chicken curry",
    content: "Soft and fluffy fried bread served with chicken curry.",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Egg Dosa",
    content: "Savory crepe with crispy edges, filled with spiced scrambled eggs bursting with flavor.",
    price: "$10.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Ghee Masala Dosa",
    content: "Crispy dosa infused with aromatic spices and rich ghee, offering a delightful South Indian breakfast experience.",
    price: "$11.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Podi Masala Dosa",
    content: "Crispy dosa filled with spicy podi masala, offering a delightful blend of flavors for a perfect start to your day.",
    price: "$10.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Sambar Idli",
    content: "Soft rice cakes paired with a tangy lentil stew with vegetables.",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Ghee Dosa",
    content: "Crispy golden crepe made from fermented rice and lentil batter, topped with clarified butter.",
    price: "$10.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Ghee Karam Dosa",
    content: "A thin lentil and rice crepe, enriched with clarified butter, paired with a side of flavorful chutneys.",
    price: "$10.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Poori & Goat curry",
    content: "Soft and fluffy fried bread served with goat curry.",
    price: "$13.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Poori & Aloo Curry",
    content: "Soft and fluffy fried bread served with potatoes and chickpeas.",
    price: "$10.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Podi Dosa",
    content: "Thin, crispy rice crepe topped with a blend of flavorful spices and sprinkled with a spicy herb mix.",
    price: "$9.99"
  },
  
];

const dcSnackItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Mysore Bonda",
    content: "",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Cut Mirchi",
    content: "",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Vada",
    content: "",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Masala Vada",
    content: "",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Mirchi Bajji",
    content: "",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Chapati",
    content: "",
    price: "$1.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Punugulu",
    content: "",
    price: "$7.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Onion Pakoda",
    content: "",
    price: "$7.99"
  },
];

const dcThaaliItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Veg Thaali",
    content: "",
    price: "$8.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Non-Veg Thaali",
    content: "",
    price: "$9.99"
  },
];

const dcCurryItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Veg Fry",
    content: "",
    price: "$9.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Egg Curry",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Chicken Fry",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Mized Veg Kurma",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Dal Tadka",
    content: "",
    price: "$11.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Gutti Vankaya Curry",
    content: "",
    price: "$11.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Dal",
    content: "",
    price: "$6.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Veg Curry",
    content: "",
    price: "$8.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Roti Pachadi",
    content: "",
    price: "$4.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Sambar",
    content: "",
    price: "$6.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Goat Curry",
    content: "",
    price: "$15.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Chana Masala",
    content: "",
    price: "$11.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Rasam",
    content: "",
    price: "$5.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Gongura Chicken Curry",
    content: "",
    price: "$13.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Gongura Goat Curry",
    content: "",
    price: "$16.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Chicken Curry",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Kadai Panner",
    content: "",
    price: "$12.99"
  },
];

 const dcPulavItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Goat Pulav",
    content: "",
    price: "$15.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Chicken Fry Piece Pulav",
    content: "",
    price: "$14.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Gongura Chicken Pulav",
    content: "",
    price: "$14.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Gongura Goat Pulav",
    content: "",
    price: "$16.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Gutti Vankaya Pulav",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Paneer Pulav",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Chicken Pulav",
    content: "",
    price: "$12.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Veg Pulav",
    content: "",
    price: "$10.99"
  },
];

    const dcDrinktItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Coca-Cola",
    content: "",
    price: "$1.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Diet Coca-Cola",
    content: "",
    price: "$1.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Sprite",
    content: "",
    price: "$1.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Water Bottle",
    content: "",
    price: "$1.99"
  },
];

    const dcDessertItems = [
  {
    img: "/assets/img/menu/menuThumb1_2.png",
    title: "Rasmalai",
    content: "Soft, spongy cheese discs soaked in sweet, creamy saffron-infused milk, a classic Indian dessert delight.",
    price: "$6.99"
  },
  {
    img: "/assets/img/menu/menuThumb1_6.png",
    title: "Gulabjamun",
    content: "Sweet, syrup-soaked dumplings made from milk solids, offering a melt-in-your-mouth dessert experience.",
    price: "$5.99"
  },
];

const items = [
            "TIFFINS",
            "THAALI",
            "PULAV",
            "NOODLES",
            "APPETIZERS",
            "SNACKS",
            "CURRIES",
            "DESSERTS"
        ];

    return (
<section className="food-menu-section fix section-padding">
        <div className="burger-shape">
        <Image src="/assets/img/shape/burger-shape.png" alt="img" width={148} height={160}   />
        </div>
        <div className="fry-shape">
        <Image src="/assets/img/shape/fry-shape.png" alt="img" width={137} height={158}   />
        </div>
        <div className="food-menu-wrapper style1">
            <div className="container">
                <div className="food-menu-tab-wrapper style-bg">
                    <div className="title-area">
                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                        <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                            FOOD MENU<Image className="ms-1"
                                src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                        </div>
                        {/* <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Desi Cravings Menu
                        </h2> */}
                    </div>

                    <div className="food-menu-tab">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className={`nav-item ${isActive === 'Breakfast' ? 'active' : ''}`} onClick={() => setIsActive('Breakfast')} role="presentation">
                                <button className="nav-link" id="pills-Breakfast-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Breakfast" type="button" role="tab"
                                    aria-controls="pills-Breakfast" aria-selected="true"><Image src="/assets/img/menu/menuIcon1_1.png" alt="img" width={36} height={36}   />Breakfast</button>
                            </li>
                            <li className={`nav-item ${isActive === 'Snacks' ? 'active' : ''}`} onClick={() => setIsActive('Snacks')} role="presentation">
                                <button className="nav-link" id="pills-Snacks-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Snacks" type="button" role="tab"
                                    aria-controls="pills-Snacks" aria-selected="false"><Image src="/assets/img/menu/menuIcon1_2.png" alt="img" width={36} height={36}   />Fresh Snacks</button>
                            </li>
                            <li className={`nav-item ${isActive === 'Thali' ? 'active' : ''}`} onClick={() => setIsActive('Thali')} role="presentation">
                                <button className="nav-link" id="pills-Thali-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Thali" type="button" role="tab"
                                    aria-controls="pills-Thali" aria-selected="false"><Image src="/assets/img/menu/menuIcon1_3.png" alt="img" width={36} height={36}   />Thali</button>
                            </li>
                            <li className={`nav-item ${isActive === 'Curries' ? 'active' : ''}`} onClick={() => setIsActive('Curries')} role="presentation">
                                <button className="nav-link" id="pills-Curries-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Curries" type="button" role="tab"
                                    aria-controls="pills-Curries" aria-selected="false"><Image src="/assets/img/menu/menuIcon1_3.png" alt="img" width={36} height={36}   />Curries</button>
                            </li>
                            <li className={`nav-item ${isActive === 'Pulav' ? 'active' : ''}`} onClick={() => setIsActive('Pulav')} role="presentation">
                                <button className="nav-link" id="pills-Pulav-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Pulav" type="button" role="tab"
                                    aria-controls="pills-Pulav" aria-selected="false"><Image src="/assets/img/menu/menuIcon1_3.png" alt="img" width={36} height={36}   />Pulav</button>
                            </li>
                            <li className={`nav-item ${isActive === 'Drinks' ? 'active' : ''}`} onClick={() => setIsActive('Drinks')} role="presentation">
                                <button className="nav-link" id="pills-Drinks-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Drinks" type="button" role="tab"
                                    aria-controls="pills-Drinks" aria-selected="false"><Image src="/assets/img/menu/menuIcon1_3.png" alt="img" width={36} height={36}   />Drinks</button>
                            </li>
                            <li className={`nav-item ${isActive === 'desserts' ? 'active' : ''}`} onClick={() => setIsActive('desserts')}  role="presentation">
                                <button className="nav-link" id="pills-desserts-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-desserts" type="button" role="tab"
                                    aria-controls="pills-desserts" aria-selected="false"><Image src="/assets/img/menu/menuIcon1_4.png" alt="img" width={36} height={36}   />Sweets and Hot</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane ${isActive === 'Breakfast' ? 'active' : ''}`} id="pills-Breakfast" role="tabpanel"
                                    aria-labelledby="pills-Breakfast-tab" tabIndex="0">
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
                                <div className={`tab-pane ${isActive === 'Snacks' ? 'active' : ''}`} id="pills-Snacks" role="tabpanel"
                                    aria-labelledby="pills-Snacks-tab" tabIndex="0">
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
                                <div className={`tab-pane ${isActive === 'Thali' ? 'active' : ''}`} id="pills-Thali" role="tabpanel"
                                    aria-labelledby="pills-Thali-tab" tabIndex="0">
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
                                <div className={`tab-pane ${isActive === 'Curries' ? 'active' : ''}`} id="pills-Curries" role="tabpanel"
                                    aria-labelledby="pills-Curries-tab" tabIndex="0">
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
                                <div className={`tab-pane ${isActive === 'Pulav' ? 'active' : ''}`} id="pills-Pulav" role="tabpanel"
                                    aria-labelledby="pills-Pulav-tab" tabIndex="0">
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
                                <div className={`tab-pane ${isActive === 'Drinks' ? 'active' : ''}`} id="pills-Drinks" role="tabpanel"
                                    aria-labelledby="pills-Drinks-tab" tabIndex="0">
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
                            <div className={`tab-pane ${isActive === 'desserts' ? 'active' : ''}`} id="pills-desserts" role="tabpanel"
                                aria-labelledby="pills-desserts-tab" tabIndex="0">
                                {/* <div className="row gx-30">
                                    <div className="col-lg-6">
                                    <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_2.png"
                                            title="Rasmalai"
                                            content="Soft, spongy cheese discs soaked in sweet, creamy saffron-infused milk, a classic Indian dessert delight."
                                            price="$6.99"
                                        ></FoodItemCard>
                                    </div>
                                    <div className="col-lg-6">
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_6.png"
                                            title="Gulabjamun"
                                            content="Sweet, syrup-soaked dumplings made from milk solids, offering a melt-in-your-mouth dessert experience."
                                            price="$5.99"
                                        ></FoodItemCard>
                                    </div>
                                </div> */}
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