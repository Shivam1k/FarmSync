import React from "react";
import { Link } from "react-router-dom";
import AnimationSVG from "./AnimationSVG";
import agrotechVideo from "../../Asset/agrotech.mp4";
import hero from "../../Asset/hero.png";

const Headers = () => {
  const headerImg =
    "https://res.cloudinary.com/dcd6y2awx/image/upload/f_auto,q_auto/v1/PlantSeller/UI%20Images/header-images";

  return (
    <div className="home-header bg-light text-dark ">
      <div className="mt-16">
        <video
          src={agrotechVideo}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
        />
      </div>
      <div className="d-flex flex-column flex-md-row-reverse flex-lg-row p-5">
        <div className="col-10 col-md-6 col-lg-6 d-flex justify-content-center p-1">
          {/* <img src={headerImg} alt="nursery garden" className='img-fluid rounded header-image' /> */}
          <div className="w-1/2  ml-60">
            <img src={hero} alt="" style={{ right: "0px" }} />
          </div>
        </div>
        <div className="col-16 col-md-6 col-lg-6 p-1 p-xl-5 d-flex justify-content-center align-items-center">
          <div className="header-intro-text">
            <p className="d-flex align-items-center greeting-text">
              <i className="fas fa-minus"></i> Welcome back!{" "}
            </p>
            <h1 className="h1 text-success d-flex me-5">
              Digital Crop Calendar <AnimationSVG />
            </h1>
            <p className="highlight-desc">
              A Digital Crop Calendar is a smart tool that helps farmers plan
              and manage farming tasks like planting, watering, and harvesting
              based on local weather, soil, and crop data. It boosts efficiency,
              reduces waste, and supports sustainable farming practices.
            </p>

            <p className="highlight-desc">Let's grow together!</p>
            <Link to="/calendar" className="btn btn-success d-flex">
              Get Start{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
