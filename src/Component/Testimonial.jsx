import React from "react";
import auther1 from "./Testimonial-images-2.png";
import auther1image from "./Testimonial-images-1.png";
import auther2 from "./Testimonial-images-3.png";
import auther2image from "./Testimonial-images-4.png";


import star from "./star_1.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="testimonail__section">
        <div className="testimonail__headers">
          <div className="testimonail__small__header">
            <h4 className="testimonail__small__header__1">Testimonial</h4>
            <h1>What Our Customer Say</h1>
          </div>
          <div className="testimonail__buttons">
            <div className="testimonail__buttons__1">
              <button className="testimonail__buttons__1__1"> &larr;</button>
            </div>
            <div className="testimonail__buttons__2">
              <button className="testimonail__buttons__2__1">&rarr;</button>
            </div>
          </div>
        </div>



     <div className="testimonail__desc">

        <div className="testimonail__desc__1">
          <div className="testimonial__auther__1">
            <div className="testimonial__auther__1__name__compnay">
              <img  className="testimonial__auther__1__image__class"    src={auther1} alt="Auther1" />
              <div className="testimonial__auther__1__image__1">
                <h2 className="testimonial__auther__1__name">Kathleen Smith</h2>
                <h4 className="testimonial__auther__1__company">Fuel Company</h4>
              </div>
            </div>
            <div className="testimonial__auther__1__image__2">
              <img src={auther1image} alt="Autherimages " />
            </div>
          </div>

          <div className="testimonial__auther__1__desc">
            <p className="testimonial__auther__1__desc__1">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
          </div>
          {/* <div className="testimonial__auther__1__rating">
            <div className="testimonial__auther__1__star">
            </div>
          </div> */}
        </div>

        <div className="testimonail__desc__2">
          <div className="testimonial__auther__1">
            <div className="testimonial__auther__1__name__compnay">
              <img  className="testimonial__auther__1__image__class"    src={auther2} alt="Auther1" />
              <div className="testimonial__auther__1__image__1">
                <h2 className="testimonial__auther__1__name">John Martin</h2>
                <h4 className="testimonial__auther__1__company">Restoration Company</h4>
              </div>
            </div>
            <div className="testimonial__auther__1__image__2">
              <img src={auther2image} alt="Autherimages " />
            </div>
          </div>

          <div className="testimonial__auther__1__desc">
            <p className="testimonial__auther__1__desc__1">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
              <img className="star__width" src={star} alt="" />
          </div>
          <div className="testimonial__auther__1__rating">
            <div className="testimonial__auther__1__star">
            </div>
          </div>
        </div>





     </div>

        
      </div>
    </>
  );
};

export default Testimonial;
