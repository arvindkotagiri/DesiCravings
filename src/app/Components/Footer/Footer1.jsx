import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
  return (
    <footer className="footer-section bg-title text-white pt-4 pb-2">
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* Logo and About */}
          <div className="col-md-4 text-center">
            <Link href="/">
              <div className="logo-wrapper d-inline-block">
                <Image
                  src="/assets/img/logo/DC_Logo.jpg"
                  alt="Desi Cravings Logo"
                  width={150}
                  height={75}
                  priority
                />
              </div>
            </Link>
            <p className="mt-3" style={{ fontSize: "14px" }}>
              {/* Authentic Telugu flavors, served with a smile — right here in Texas. */}
              Get in touch with us for authentic Telugu flavors served with a smile — right here in Texas.
            </p>
            <div className="social-icon d-flex justify-content-center gap-3 mt-2">
              <a href="https://www.facebook.com/desicravingsarlington" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://www.instagram.com/mydesicravings/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>

          {/* Address and Contact */}
          <div className="col-md-4 text-center">
            <h6 className="mb-3 text-white">Contact</h6>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>604 Doug Russell Rd, Suite E
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>+1 (972) 957-4009
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>info@example.com
            </p>
          </div>

          {/* Hours */}
          <div className="col-md-4 text-center">
            <h6 className="mb-3 text-white">Operating Hours</h6>
            <p className="mb-1">
              Mon – Fri: <span className="text-theme-color2">9am – 12am</span>
            </p>
            <p>
              Sat – Sun: <span className="text-theme-color2">9am – 1am</span>
            </p>
          </div>
        </div>

        <hr className="mt-4 mb-3 text-light" />

        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 small text-center">
  <p className="mb-0">© 2025 Desi Cravings. All rights reserved.</p>
          <div className="d-none d-md-flex gap-3">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;