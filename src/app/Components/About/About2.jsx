"use client";
import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const About2 = () => {
  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const items = [
    "TIFFINS",
    "THAALI",
    "PULAV",
    "NOODLES",
    "APPETIZERS",
    "SNACKS",
    "CURRIES",
    "DESSERTS",
  ];

  return (
    <section
      className="about-us-section dc-section-padding"
      style={{ backgroundColor: "#FFF8F0"}}
    >
      <div className="container-fluid ">
        <div className="row align-items-center g-5">
          {/* VIDEO */}
          <div className="col-lg-6">
            <div className="video-wrapper">
              <video
                className="w-100 rounded"
                style={{
                  maxHeight: "520px",
                  objectFit: "contain",
                  borderRadius: "16px",
                }}
                controls
                playsInline
                muted
                autoPlay
                loop
                preload="metadata"
                poster="/assets/img/about/aboutThumb2_1.png"
              >
                <source
                  src="/assets/images/about video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* TEXT */}
          <div className="col-lg-6">
            <div className="about-content">
              <h5 className="sub-title d-flex align-items-center gap-2 mb-2 fw-semibold" style={{ color: "#F4A300"}}>
                ABOUT US
              </h5>
              <h2 className="mb-4 fw-bold" style={{ color: "#212121" }}>
                A Symphony of Telugu Flavors in Texas
              </h2>
              <p className="mb-4 text-secondary fs-5">
                Every dish at our restaurant is a celebration of Telugu
                tradition — crafted with precision, care, and a passion for
                bold, authentic flavors. Our experienced chefs bring deep
                knowledge of regional spices and techniques to every plate,
                ensuring a taste that’s both nostalgic and unforgettable.
              </p>

              {/* Fancy Feature Boxes */}
              <div className="row gy-4">
                <div className="col-12 d-flex align-items-start gap-3">
                  <Image
                    src="/assets/img/icon/aboutIcon1_1.svg"
                    alt="icon"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h6 className="mb-1 fw-bold">Super Quality Food</h6>
                    <p className="mb-0 text-muted">
                      Handpicked ingredients and authentic Telugu recipes in
                      every bite.
                    </p>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-start gap-3">
                  <Image
                    src="/assets/img/icon/aboutIcon1_2.svg"
                    alt="icon"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h6 className="mb-1 fw-bold">Qualified Chefs</h6>
                    <p className="mb-0 text-muted">
                      Expert chefs crafting bold flavors with tradition and
                      care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="w-100 py-4 pt-2 mt-4">
          <Marquee gradient={false} speed={30} pauseOnHover={true}>
            {items.map((item, index) => (
              <span
                key={index}
                className="mx-4 fs-2 fw-semibold text-uppercase"
                style={{ letterSpacing: "1px", color: "#757575"}}
              >
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default About2;
