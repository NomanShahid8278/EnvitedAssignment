import React from "react";
import { useHistory } from "react-router-dom";

import CardImg from "../assests/images/card-img.png";

const LandingPage = () => {
  const history = useHistory();
  return (
    <>
      <div className="hero-main py-[100px] px-[160px] lg:px-[40px] lg:py-[60px] xs:py-[29px] xs:px-[28px]">
        <div className="container-fluid">
          <div className="row-custom flex items-center gap-[170px] xl:gap-[55px] lg:flex-col-reverse xs:gap-[36px]">
            <div className="col-img-otr w-[50%] md:w-[100%]">
              <div className="col-img-inr flex items-center justify-center flex-col">
                <img
                  className="card-img w-[60%] shadow-Shadow1 2xl:w-[80%] object-contain rounded-35 xs:w-[60%] xs:rounded-16"
                  src={CardImg}
                  alt="icon"
                />
                <div className="action hidden mt-[52px] lg:flex">
                  <p className="theme-btn bg-gradient-to-r from-purple-Shade1 to-purple-Shade2 xs:px-[21px] xs:text-[16px] xs:leading-[18px]">
                    🎉 Create my event
                  </p>
                </div>
              </div>
            </div>
            <div className="col-content-otr w-[50%] lg:w-[100%]">
              <div className="col-content-inr">
                <h1 className="heading text-right text-primary-dark lg:text-center xs:text-[36px] xs:leading-[36px]">
                  Imagine if <br />
                  <span className="text-[64px] leading-[64px] lg:flex lg:items-center lg:justify-center xs:text-[36px] xs:leading-[36px]">
                    Snapchat{" "}
                  </span>{" "}
                  <br />
                  had events.
                </h1>
                <p className="desc text-right text-Grey-Shade1 mt-[16px] mb-[52px] lg:text-center lg:mb-[0px] lg:px-[150px] md:px-[60px] xs:px-[0px] xs:text-[16px] xs:leading-[18px]">
                  Easily host and share events with your friends <br /> across
                  any social media.
                </p>
                <div
                  className="action flex items-center justify-end lg:hidden"
                  onClick={() => history.push("/event")}
                >
                  <p className="theme-btn bg-gradient-to-r from-purple-Shade1 to-purple-Shade2 xs:px-[21px] xs:text-[16px] xs:leading-[18px]">
                    🎉 Create my event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
