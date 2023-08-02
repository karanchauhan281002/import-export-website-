import React from "react";
import "./Contact.css";
import email from "./Contact-1.png";
import call from "./Contact-2.png";
import time from "./Contact-3.png";
import images1 from "./Contact-4.png";
import images2 from "./Contact-5.png";
import images3 from "./Contact-6.png";
import images4 from "./Contact-7.png";

const Contact = () => {
  return (
    <>
      <div className="contact__section">
        <div className="contact__header__desc__items">
          {/* <div className="contact__small__header">
            <h3 className="contact__small__header__1">Contact</h3>
          </div> */}
          <div className="contact__big__header">
            <h1 className="contact__big__header__1">Get in touch with us</h1>
          </div>
          <div className="contact__desc">
            <h4 className="contact__desc__1">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </h4>
          </div>
          <div className="contact__email__call__time">
            <div className="contact__email">
              <img className="contact__email__image" src={email} />
              <div className="contact__email__image__1">
                <span>Email</span>
                <span>demo@logistics.com</span>
              </div>
            </div>
            <div className="contact__call">
              <img className="contact__call__image" src={call} />
              <div className="contact__call__image__1">
                <span>Call</span>
                <span>demo@logistics.com</span>
              </div>
            </div>
            <div className="contact__time">
              <img className="contact__time__image" src={time} />
              <div className="contact__time__image__1">
                <span>Time</span>
                <span>demo@logistics.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__with__us__form">
          <div className="contact__form">
            <div className="contact__name__email">
              <input
                className="input__name"
                
                placeholder="Enter the name"
              />
              <input
                className="input__email"
                type="email"
                placeholder="Enter the email"
              />
            </div>
            <div className="contact__phone__city">
              <input
                className="input__phone"
                max="10"
                type="number"
                placeholder="Enter the Phone"
              />
              <input
                className="input__city"
                type="email"
                placeholder="Enter the city"
              />
            </div>
            <textarea
              className="contact__text__area__1"
              type="text"
              placeholder="Enter the text"
            />
          </div>
          <div className="contact__submit">
            <button className="submit">Submit</button>
          </div>
        </div>
        <div className="contact__images">
          <img
            className="contact__images__1"
            src={images1}
            alt="contact-images"
          />
          <img
            className="contact__images__2"
            src={images2}
            alt="contact-images"
          />
          <img
            className="contact__images__3"
            src={images3}
            alt="contact-images"
          />
          <img
            className="contact__images__4"
            src={images4}
            alt="contact-images"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
