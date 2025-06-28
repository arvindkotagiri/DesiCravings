"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const About2 = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("assets/images/about video.mp4");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };
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
<section className="about-us-section fix section-padding pt-0">
        <div className="about-wrapper style2">
            <div className="shape1 d-none d-xxl-block"><Image src="/assets/img/shape/aboutShape2_1.png" alt="img" width={225} height={401}   /></div>
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            {/* <div className="about-thumb mb-5 mb-lg-0"> */}
                            {/* <Image src="/assets/img/about/aboutThumb2_1.png" alt="img" width={875} height={536}   /> */}
                                
                                <div>
  <video
  className="w-100"
  style={{ maxHeight: "536px", borderRadius: "12px", objectFit: "cover" }}
  controls
  playsInline
  muted
  autoPlay
  loop
  preload="metadata"
  poster="/assets/img/about/aboutThumb2_1.png"
>
  <source src="/assets/images/about video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

                        </div>
                        <div className="col-lg-6">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                                    About US<Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    A Symphony of Telugu Flavors in Texas
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">Every dish at our restaurant is a celebration of Telugu tradition — crafted with precision, care, and a passion for bold, authentic flavors. Our experienced chefs bring deep knowledge of regional spices and techniques to every plate, ensuring a taste that’s both nostalgic and unforgettable.</div>
                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item"><Image src="/assets/img/icon/aboutIcon1_1.svg" alt="img" width={100} height={100}   /></div>
                                    <div className="item">
                                        <h6>super quality food</h6>
                                        <p>Handpicked ingredients and authentic Telugu recipes in every bite.</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item"><Image src="/assets/img/icon/aboutIcon1_2.svg" alt="img" width={100} height={100}   /></div>
                                    <div className="item">
                                        <h6>Qualified Chef</h6>
                                        <p>Expert chefs crafting bold flavors with tradition and care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                        <li className="marquee-item style1">
                            <span className="text-slider"></span><span className="text-slider text-style">TIFFINS</span>
                            <span className="text-slider"></span><span className="text-slider text-style">THAALI</span>
                            <span className="text-slider"></span><span className="text-slider text-style">PULAV</span>
                            <span className="text-slider"></span><span className="text-slider text-style">NOODLES</span>
                            <span className="text-slider"></span><span className="text-slider text-style">APPETIZERS</span>
                            <span className="text-slider"></span><span className="text-slider text-style">SNACKS</span>
                            <span className="text-slider"></span><span className="text-slider text-style">CURRY'S</span>
                            <span className="text-slider"></span><span className="text-slider text-style">DESSERTS</span>
                        </li>
                </ul>
            </div>
        </div> */}
        <div className="marquee-wrapper-custom">
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {items.map((item, index) => (
          <span key={index} className="text-slider-item">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
        {/* <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}   
            handelClose={handelClose}        
        ></VideoModal>  */}

    </section>
    );
};

export default About2;