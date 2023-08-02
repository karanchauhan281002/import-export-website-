import React from "react";
import "./Footer.css";
import footer__1__image from "./Footer__images__1.jpg";
import footer__2__image from "./Footer__images__2.png";
import footer__3__image from "./Image/facebook.jpg";
import footer__4__image from "./Image/instagram.jpg";
import footer__5__image from "./Image/tw.jpg";
import footer__email from "./Contact-1.png";
import footer__call from "./Contact-2.png";
import logo10 from './Image/tw.jpg'
import logo11 from './Image/link.jpg'
import logo12 from './Image/facebook.jpg'
const Footer = () => {
  return (
    <>
      <img className='footer__image'   src={footer__1__image} alt="" />
      <div className="footer___section">
        <div className="footer__content__1">
          <ul className="footer__content__1__list">
            <li className="footer__content__1__list__image">
              <img src={footer__2__image} alt="Comapany Footer Images" />
            </li>
            <li className="footer__content__1__list_1">Company Name</li>
            <li className="footer__content__1__list_2">Pages</li>
            <li className="footer__content__1__list_3">Utility</li>
            <li className="footer__content__1__list_4">Subscribe</li>
          </ul>
        </div>
        <div className="footer__content__2">
          <div className="footer__subcontent__2__1">
            {/* <p className="footer__subcontent__2__1__para">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p> */}

            <div className="footer__subcontact__2__1__images">
              <div className="footer__subcontact__2__1__email">
                <img
                  className="footer__subcontact__2__1__email__image"
                  src={footer__email}
                />
                <div className="footer__subcontact__2__1__email__image__1">
                  <span>Email</span>
                  <span>demo@logistics.com</span>
                </div>
              </div>
              <div className="footer__subcontact__2__1__call">
                <img
                  className="footer__subcontact__2__1__call__image"
                  src={footer__call}
                  />
                <div className="footer__subcontact__2__1__call__image__1">
                  <span>Call</span>
                  <span>demo@logistics.com</span>
                </div>
              </div>
            </div>
             </div>

            <div className="footer__subcontent__2__2">
              <ul className="footer__subcontent__2__2__list">
                <li className="footer__subcontent__2__2__list_1">About US</li>
                <li className="footer__subcontent__2__2__list_2">Our Team</li>
                <li className="footer__subcontent__2__2__list_3">Our project</li>
                <li className="footer__subcontent__2__2__list_4">Pricing</li>
                <li className="footer__subcontent__2__2__list_5">Conatct</li>
              </ul>
            </div>

            <div className="footer__subcontent__3__3">
              <ul className="footer__subcontent__3__3__list">
                <li className="footer__subcontent__3__3__list_1">
                  Style Guide{" "}
                </li>
                <li className="footer__subcontent__3__3__list_2">
                  Change Log{" "}
                </li>
                <li className="footer__subcontent__3__3__list_3">
                  Licensecs {" "}
                </li>
                <li className="footer__subcontent__3__3__list_4">
                  Protected{" "}
                </li>
                <li className="footer__subcontent__3__3__list_5">
                  Not Found {" "}
                </li>
              </ul>
            </div>

            <div className="footer__subcontent__4__4">
              <div className="footer__subcontent__4__4__1">
                <input
                  className="footer__subcontent__4__4__input"
                  type="email"
                  placeholder="Enter the Email"
                />
              </div>
              <div className="footer__subcontent__4__4__buttons">
                <button className="footer__subcontent__4__4__buttons__1">Send Now</button>
                
              </div>
              <div className="logoall" >
      <img src={logo10} className="logo10" alt=""/>
      <img src={logo11} className="logo11" alt=""/>
      <img src={logo12} className="logo12" alt=""/>
    
      </div>
            </div>
        </div>
        <div className="footer__content__3">
            <div className="footer__subcontent__3__1">
                 <p className="footer__subcontent__3__para">Copyright ©</p>
                
            </div>
            <div className="footer__subcontent__3__2">
                <ul className="footer__subcontent__3__2__list">
                    <li className="footer__subcontent__3__2__list_1">Style Guide</li>
                    <li className="footer__subcontent__3__2__list_2">Change Log</li>
                    <li className="footer__subcontent__3__2__list_3">Licences</li>
                    <li className="footer__subcontent__3__2__list_4">Password</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
