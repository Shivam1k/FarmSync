// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const logoImg =
//     "https://res.cloudinary.com/dcd6y2awx/image/upload/f_auto,q_auto/v1/PlantSeller/UI%20Images/plant_seller_bg_none";

//   return (
//     <footer className="text-light bg-dark p-4 p-md-5 footer-container">
//       <div className="container">
//         <section className="footer-content-desc-links">
//           <div className="text-md-start">
//             <div className="d-flex flex-column flex-md-row mt-3 mt-md-0">
//               <div className="mb-2 d-flex flex-column flex-sm-row align-items-sm-start flex-md-column col-md-4 col-lg-6 me-md-3">
//                 <h6 className="pe-sm-4 mt-sm-3 mt-md-0">
//                   <Link className="navbar-brand" to="/">
//                     <img
//                       src={logoImg}
//                       alt="plant seller logo"
//                       className="logo-img"
//                     />
//                   </Link>
//                 </h6>
//                 <div className="d-flex flex-column justify-content-start">
//                   <p className="highlight-desc">Let's grow together!</p>
//                   <p className="desc">
//                     A Digital Crop Calendar is a smart tool that helps farmers
//                     plan and manage farming tasks like planting, watering, and
//                     harvesting based on local weather, soil, and crop data. It
//                     boosts efficiency, reduces waste, and supports sustainable
//                     farming practices.
//                   </p>
//                 </div>
//               </div>
//               <div className="d-flex flex-wrap justify-content-between align-items-start col-md-8 col-lg-6">
//                 <div className="d-flex flex-column align-items-start pe-3">
//                   <h6 className="text-uppercase fw-bold mb-4">Plants</h6>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Flowering
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Medicinal
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Ornamental
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Indoor
//                     </Link>
//                   </p>
//                 </div>
//                 <div className="d-flex flex-column align-items-start pe-3">
//                   <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Nursery
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Settings
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Orders
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="#" className="text-reset">
//                       Help
//                     </Link>
//                   </p>
//                 </div>
//                 <div className="d-flex flex-column align-items-start pe-3">
//                   <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
//                   <p>
//                     <i className="far fa-address-card me-3 text-secondary"></i>{" "}
//                     Mohali, Punjab, India.
//                   </p>
//                   <p>
//                     <Link
//                       to="mailto:piyushraj2340@gmail.com"
//                       className="text-light"
//                     >
//                       <i className="fas fa-envelope me-3 text-secondary"></i>
//                       piyushraj2340@gmail.com
//                     </Link>
//                   </p>
//                   <p>
//                     <Link to="tel:+917463980230" className="text-light">
//                       <i className="fas fa-phone me-3 text-secondary"></i>
//                       +917463980230
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="">
//           <form>
//             <div className="d-flex flex-column">
//               <div className="mt-3">
//                 <p className="m-0">Subscribe to our newsletter</p>
//               </div>
//               <div className="mb-2">
//                 <input
//                   type="email"
//                   id="sub-email"
//                   className="form-control"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div className="mb-2">
//                 <button type="submit" className="btn btn-success mb-4">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </form>
//         </section>

//         <section className="d-flex flex-column justify-content-center justify-content-lg-between">
//           <div className="mb-2">
//             <span>connected with us on social networks:</span>
//           </div>
//           <div>
//             <Link
//               to="https://www.facebook.com/Piyushraj2340/"
//               className="me-4 link-secondary"
//             >
//               <i className="fab fa-facebook-f"></i>
//             </Link>
//             <Link
//               to="https://twitter.com/piyushraj2340"
//               className="me-4 link-secondary"
//             >
//               <i className="fab fa-twitter"></i>
//             </Link>
//             <Link
//               to="https://www.instagram.com/piyushraj2340/"
//               className="me-4 link-secondary"
//             >
//               <i className="fab fa-instagram"></i>
//             </Link>
//             <Link
//               to="https://www.linkedin.com/in/piyushraj2340/"
//               className="me-4 link-secondary"
//             >
//               <i className="fab fa-linkedin"></i>
//             </Link>
//             <Link
//               to="https://github.com/piyushraj2340"
//               className="me-4 link-secondary"
//             >
//               <i className="fab fa-github"></i>
//             </Link>
//           </div>
//         </section>
//         <div
//           className="text-center p-4"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
//         >
//           © 2021 Copyright:
//           <Link className="text-reset fw-bold" to="/">
//             {" "}
//             https://plantseller.vercel.app
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-md-4">
          <Link className="navbar-brand" to="/"> <button class="  mb-3 p-3 bg-green-500 rounded-xl shadow-2xl">
          FarmSync
</button></Link>
            <p>
              Plan, manage, and optimize your farming activities with ease using
              our smart digital tools. Grow better, farm smarter!
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/features" className="text-light text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-light text-decoration-none"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5 className="mb-3">Contact Us</h5>
            <p>
              <i className="fas fa-envelope"></i> support@digitalcropcalendar.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +123-456-7890
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Greenfield Ave,
              AgriCity
            </p>
            <div className="social-icons">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">© 2024 Digital Crop Calendar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* About Section */}
//           <div>
//             <h3 className="text-white text-lg font-semibold">Digital Crop Calendar</h3>
//             <p className="mt-2 text-gray-400">
//               Plan, manage, and optimize your farming activities with ease using
//               our smart digital tools. Grow better, farm smarter!
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white text-lg font-semibold">Quick Links</h3>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <a href="/features" className="hover:text-white">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-white">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="/privacy-policy" className="hover:text-white">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h3 className="text-white text-lg font-semibold">Contact Us</h3>
//             <ul className="mt-2 space-y-2">
//               <li>Email: support@digitalcropcalendar.com</li>
//               <li>Phone: +123-456-7890</li>
//               <li>Address: 123 Greenfield Ave, AgriCity</li>
//             </ul>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-700 pt-4 text-center">
//           <p>© 2024 Digital Crop Calendar. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
