import React from "react";

import EventImg from "../assests/images/event-image.png";
import EventIcon1 from "../assests/images/calendar-icon.svg";
import EventIcon2 from "../assests/images/location-icon.svg";

const Event = () => {
  return (
    <>
      <div className="Event-main py-[184px] px-[240px] lg:px-[184px] lg:py-[88px] md:px-[60px] xs:py-[0px] xs:px-[0px]">
        <div className="container-fluid">
          <div className="row-custom flex gap-[190px] xl:gap-[55px] lg:flex-col-reverse lg:gap-[36px] xs:gap-[0px]">
            <div className="col-content-otr w-[50%] lg:w-[100%]">
              <div className="col-content-inr xs:px-[20px] xs:pt-[11px] xs:pb-[24px]">
                <h2 className="heading-h2 text-primary-dark text-[48px] leading-[56px] xs:text-[28px] xs:leading-[32px]">
                  Birthday Bash
                </h2>
                <p className="desc text-Grey-Shade1 mt-[16px] mb-[65px] lg:mb-[55px] xs:mb-[32px] xs:text-[16px] xs:leading-[18px]">
                  Hosted by
                  <p className="linkk cursor-pointer ml-[4px]">Elysia</p>
                </p>
                <div className="icon-text-otr flex items-center gap-[20px] mb-[32px]">
                  <div className="icon-otr shadow-Shadow2 flex justify-center items-center w-[56px] h-[56px] bg-white rounded-10 xs:w-[48px] xs:h-[48px]">
                    <img
                      className="card-img object-contain w-[32px] h-[32px] xs:w-[24px] xs:h-[24px]"
                      src={EventIcon1}
                      alt="icon"
                    />
                  </div>
                  <div className="icon-text">
                    <p className="icon-heading text-primary-dark mb-[3px]">
                      18 August 6:00PM
                    </p>
                    <p className="icon-desc text-Grey-Shade1">
                      to <span>19 August 1:00PM</span> UTC +10
                    </p>
                  </div>
                </div>
                <div className="icon-text-otr flex items-center gap-[20px]">
                  <div className="icon-otr shadow-Shadow2 flex justify-center items-center w-[56px] h-[56px] bg-white rounded-10 xs:w-[48px] xs:h-[48px]">
                    <img
                      className="card-img object-contain w-[32px] h-[32px] xs:w-[24px] xs:h-[24px]"
                      src={EventIcon2}
                      alt="icon"
                    />
                  </div>
                  <div className="icon-text">
                    <p className="icon-heading text-primary-dark mb-[3px]">
                      Street name
                    </p>
                    <p className="icon-desc text-Grey-Shade1">
                      Suburb, State, Postcode
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-img-otr w-[50%] lg:w-[100%]">
              <div className="col-img-inr flex items-center justify-center flex-col">
                <img
                  className="card-img w-[100%] shadow-Shadow1 2xl:w-[100%] object-contain xs:w-[100%]"
                  src={EventImg}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
