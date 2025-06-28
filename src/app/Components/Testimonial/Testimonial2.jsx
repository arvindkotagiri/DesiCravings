"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

const Testimonial2 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const tesItems = [
    {
      img: "/assets/img/testimonial/testimonialProfile2_1.png",
      name: "Vivek Vardhan Reddy K",
      content:
        "The food and service were both excellent! Especially loved the Gongura Mutton — it was flavorful and perfectly cooked. Highly recommend this place for anyone craving authentic taste.",
    },
    {
      img: "/assets/img/testimonial/testimonialProfile2_2.png",
      name: "JAYANTH REDDY",
      content:
        "The sambar idly is an exceptional dish; I highly recommend it. For enhanced flavor, sprinkle a pinch of salt on top before eating, without mixing.",
    },
    {
      img: "/assets/img/testimonial/testimonialProfile2_3.png",
      name: "Ankit Tripathi",
      content:
        "A true hidden gem.Specially for students nearby.Evening snacks are always fresh and thali options are pretty affordable.",
    },
    {
      img: "/assets/img/testimonial/testimonialProfile2_1.png",
      name: "Amrutha bysani",
      content:
        "Great place to eat and affordable prices",
    },
    {
      img: "/assets/img/testimonial/testimonialProfile2_2.png",
      name: "sivaramakrishna thammineni",
      content:
        "Good place to hangout with friends.taste is good with affordable prices.",
    },
  ];

  return (
    <section
      className="testimonial-section section-padding"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <div
            className="d-flex justify-content-center align-items-center gap-2 mb-2"
            style={{ color: "#F4A300", fontWeight: 600 }}
          >
            <Image
              src="/assets/img/icon/titleIcon.svg"
              alt="decor"
              width={20}
              height={20}
            />
            TESTIMONIALS
            <Image
              src="/assets/img/icon/titleIcon.svg"
              alt="decor"
              width={20}
              height={20}
            />
          </div>
          <h2 style={{ color: "#C62828", fontWeight: "700" }}>
            What Our Happy Customers Say
          </h2>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {tesItems.map((item, i) => (
            <div key={i} className="px-3">
              <div
                className="testimonial-card p-4 bg-white rounded shadow-sm h-100 d-flex flex-column justify-content-between"
                style={{ borderLeft: "5px solid #C62828", minHeight: "320px" }}
              >
                <div>
                  <div className="mb-3">
                    <Image
                      src="/assets/img/icon/quote.svg"
                      alt="quote"
                      width={35}
                      height={25}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "#212121",
                      fontStyle: "italic",
                      lineHeight: 1.8,
                    }}
                  >
                    “{item.content}”
                  </p>
                </div>
                <div className="mt-4 text-end">
                  {/* <Image
                    src={item.img}
                    alt="Customer"
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  /> */}
                  <div>
                    <h6 className="mb-0" style={{ color: "#C62828" }}>
                      {"- " + item.name}
                    </h6>
                    {/* <small style={{ color: "#757575" }}>
                      Desi Cravings, Texas
                    </small> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial2;
