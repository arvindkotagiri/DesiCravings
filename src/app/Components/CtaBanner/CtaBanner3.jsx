import Image from "next/image";
import Link from "next/link";

const CtaBanner3 = () => {
  return (
    <section
      className="position-relative overflow-hidden py-5"
      style={{ minHeight: "420px", backgroundColor: "#FFF8F0" }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center text-center text-xl-start gy-4">
          {/* Mobile/Tablet Image */}
          <div className="col-12 d-xl-none mb-4">
            <div style={{ width: "100%", height: "240px", position: "relative", borderRadius: "16px", overflow: "hidden" }}>
              <Image
                src="/assets/Images/cta-background.jpg"
                alt="Promo Image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="col-xl-6 d-flex flex-column justify-content-center">
            <h5
              className="text-uppercase mb-2 d-flex justify-content-center justify-content-xl-start gap-2 align-items-center"
              style={{ color: "#F4A300" }}
            >
              Order Online
            </h5>

            <h2 className="fw-bold mb-4" style={{ color: "#212121" }}>
              Fresh and flavorful Telugu dishes at your doorstep!
            </h2>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-xl-start">
              <Link
                href="https://order.online/store/desi-cravings-arlington-33842817/?hideModal=true&pickup=true&redirected=true"
                target="_blank"
                className="dc-cta-order-btn btn px-4 py-2 rounded shadow-sm d-flex align-items-center gap-2"
              >
                <i className="bi bi-truck order-btn-icon"></i>
                <div className="text-start">
                  <div className="fw-bold">Order Now!</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Full Image for Desktop */}
      <div
        className="d-none d-xl-block position-absolute top-0 end-0 h-100"
        style={{
          width: "55%",
          zIndex: 1,
          borderTopLeftRadius: "50px",
          borderBottomLeftRadius: "50px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/assets/Images/cta-background.jpg"
          alt="Promo Image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
};

export default CtaBanner3;
