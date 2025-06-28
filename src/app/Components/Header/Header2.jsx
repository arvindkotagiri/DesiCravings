"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import OpenNowStatus from './OpenNowStatus';
import Script from 'next/script';
export default function Header2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     if (currentScrollPos > prevScrollPos) {
  //       setIsSticky('cs-gescout_sticky'); // Scrolling down
  //     } else if (currentScrollPos !== 0) {
  //       setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
  //     } else {
  //       setIsSticky();
  //     }
  //     setPrevScrollPos(currentScrollPos); // Update previous scroll position
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
  //   };
  // }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      }  ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left header-info">
              <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                <li><i className="bi bi-geo-alt-fill"></i>604 Doug Russell Rd - Arlington</li>
                <OpenNowStatus />
              </ul>
            </div>
            <div className="cs_top_header_right">
            <div className="cs_header_social_links_wrap">
                <div className="cs_header_social_links top-header-social-icon">
                Follow Us:
                  <ul>
                    <li><a href="https://www.facebook.com/desicravingsarlington"><i className="bi bi-facebook"></i></a></li>
                    {/* <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li> */}
                    <li><a href="https://www.instagram.com/mydesicravings/"><i className="bi bi-instagram"></i></a></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      

      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
            <Link className="cs_site_branding" href="/">
                {/* <Image src="/assets/img/logo/logoWhite.svg" alt="img" width={167} height={58}   /> */}
                {/* <Image src="/assets/img/logo/DC_Logo.jpg" alt="img" width={167} height={58}   /> */}
               <div className="logo-wrapper">
  <Image
    src="/assets/img/logo/DC_Logo.jpg"
    alt="Desi Cravings Logo"
    width={150} // adjust based on header design
    height={75}
    // style={{ height: "auto", width: "100%", maxWidth: "180px", objectFit: "contain" }}
    priority
  />
</div>
              </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs_teggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
            </div>
            <div className="cs_main_header_right">
              <div className="header-btn d-flex align-items-center">

              <a onClick={() => setSearchToggle(!searchToggle)} className="search-trigger search-icon"><i className="bi bi-search"></i></a>

                <div className="main-button">
                <Link href="https://order.online/store/desi-cravings-arlington-33842817/?hideModal=true&pickup=true&redirected=true" target='_blank' className="theme-btn" >ORDER NOW <i className="bi bi-arrow-right"></i></Link>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className={`search-wrap ${searchToggle ? 'active' : ''}`} >
            <div className="search-inner">
                <i onClick={() => setSearchToggle(!searchToggle)} className="bi bi-x-lg search-close" id="search-close"></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search..." />
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="cs_site_header_spacing_130"></div>

    </div>

  );
}
