// "use client"
// import { useEffect } from "react";
// import loadBackgroudImages from "./loadBackgroudImages";
// import Link from "next/link";

// const BreadCumb = ({Title,bgimg}) => {
    
//     useEffect(() => {
//         loadBackgroudImages();
//       }, []);

//     return (

//         <div className="breadcumb-section">
//         <div className="breadcumb-wrapper" data-background={bgimg}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="breadcumb-content">
//                             <h1 className="breadcumb-title">{Title}</h1>
//                             <ul className="breadcumb-menu">
//                                 <li><Link href="/">Home</Link></li>
//                                 <li className="text-white">/</li>
//                                 <li className="active">{Title}</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//     );
// };

// export default BreadCumb;

"use client";
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Link from "next/link";

const BreadCumb = ({ Title, bgimg }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="dc-breadcrumb"
      style={{ backgroundImage: `url(${bgimg})` }}
      data-background={bgimg}
    >
      <div className="dc-breadcrumb__overlay"></div>
      <div className="container dc-breadcrumb__container">
        <nav aria-label="breadcrumb" className="dc-breadcrumb__nav">
          <h1 className="dc-breadcrumb__title">{Title}</h1>
          <ol className="dc-breadcrumb__list">
            <li className="dc-breadcrumb__item">
              <Link href="/" className="dc-breadcrumb__link">Home</Link>
            </li>
            <li className="dc-breadcrumb__separator" aria-hidden="true">›</li>
            <li className="dc-breadcrumb__item dc-breadcrumb__item--active" aria-current="page">
              {Title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadCumb;
