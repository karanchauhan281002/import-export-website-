import React from "react";
import "./services.css";
import ship from "./services4.png";
import building from './services1.png'
import flight from './services2.png'
import truck from './services3.png'


const Component1 = () => {
  return (
    <div className="services__main">
      <div className="services__header">
        <h1 className="services__subtext___header__1">What We Do</h1>
        <h1 className="services__subtext___header__2">Safe & Reliable Cargo Solutions</h1>
        <div className="services__subtext"></div>
        <div className="services__subtext__line"></div>
      </div>







      <div className="services__content__1">
        <div className="services__subcontent__1">
          <img src={ship} alt="Shipping Image" />
          <div className="services__subline__1"></div>
          <div className="services__subsubContent__1">
            <span className="services__spansubcontent__1"></span>
            
            <h2 className="services__subcontent__header__1">
              Sea Transport Services
            </h2>
            <p className="services__subdesc__1">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>



        <div className="services__subcontent__2">


          <img src={flight} alt="Shipping Image" />
        <div className="services__subline__1"></div>

          <div className="services__subsubContent__2">
            <span className="services__spansubcontent__2"></span>
            <h2 className="services__subcontent__header__2">
            Air Flight Services
            </h2>
            <p className="services__subdesc__2">
            Following the quality of our service thus having gained trust of our many clients.
            </p>
          </div>
        </div>
      </div>





      <div className="services__content__2">

        
        <div className="services__subcontent__3">
          
          <img src={building} alt="Shipping Image" />
          <div className="services__subline__1"></div>

          <div className="services__subsubContent__3">
            <span className="services__spansubcontent__3"></span>
            <h2 className="services__subcontent__header__3">
            Warehousing Services
            </h2>
            <p className="services__subdesc__3">
            Following the quality of our service thus having gained trust of our many clients.
            </p>
          </div>
        </div>

        <div className="services__subcontent__4">
          <img src={truck} alt="Shipping Image" />
          <div className="services__subline__1"></div>

          <div className="services__subsubContent__4">
            <span className="services__spansubcontent__4"></span>
            <h2 className="services__subcontent__header__4">
            Local Shipping Services
            </h2>
            <p className="services__subdesc__4">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
