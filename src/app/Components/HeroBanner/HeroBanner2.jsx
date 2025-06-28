"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const HeroBanner2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const heroContent = [
    {
      img: "/assets/img/banner/bannerThumb2_1.png",
      subtitle: "DESI CRAVINGS",
      title: "Sizzling Dosas",
    },
    {
      img: "/assets/img/banner/bannerThumb2_2.png",
      subtitle: "DESI CRAVINGS",
      title: "Authentic Pulavs",
    },
    {
      img: "/assets/img/banner/bannerThumb2_3.png",
      subtitle: "DESI CRAVINGS",
      title: "South Indian Thali",
    },
  ];

  return (
    <section
      className="hero-banner-section position-relative"
      style={{
        backgroundColor: "#FFF8F0",
        padding: "4rem 0",
        overflow: "hidden",
      }}
    >
      <Slider {...settings}>
        {heroContent.map((item, i) => (
          <div key={i}>
            <div className="container">
              <div className="row align-items-center g-5">
                {/* LEFT - TEXT */}
                <div className="col-lg-6">
                  <div className="text-start">
                    <h6
                      className="fw-bold mb-3"
                      style={{ color: "#F4A300", letterSpacing: "1px" }}
                    >
                      {item.subtitle}
                    </h6>
                    <h1
                      className="display-4 fw-bold mb-4"
                      style={{ color: "#2C1E16" }}
                    >
                      {item.title}
                    </h1>
                    <p className="lead text-muted mb-4" style={{ color: "#212121" }}>
                      Experience the bold flavors of Telugu cuisine crafted by
                      passionate chefs in Texas.
                    </p>
                    {/* <Link
                      href="https://order.online/store/desi-cravings-arlington-33842817/?hideModal=true&pickup=true&redirected=true"
                      className="btn btn-lg"
                      style={{
                        backgroundColor: "#F4A300",
                        color: "#fff",
                        padding: "12px 28px",
                        borderRadius: "8px",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                      target="_blank"
                    >
                      ORDER NOW <i className="bi bi-arrow-right ms-2"></i>
                    </Link> */}
                  </div>
                </div>

                {/* RIGHT - IMAGE */}
                <div className="col-lg-6 text-center">
                  <div
                    className="rounded overflow-hidden"
                    style={{
                      maxWidth: "500px",
                      margin: "0 auto",
                      border: "8px solid #fff3dc",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="img-fluid"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner2;
