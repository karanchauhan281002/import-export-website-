import OpportunityContainer from "../Component/OpportunityContainer";
import ContainerSafePackage from "../Component/ContainerSafePackage";
import "./FrameComponent.css";
const FrameComponent = () => {
  return (
    <div className="why-choose-us-parent">
      <div className="why-choose-us">
        <img className="background-icon" alt="" src="/background.svg" />
        <div className="image">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="feature-tag">
            <img className="background-icon1" alt="" src="/background1.svg" />
            <div className="text">
              <img className="icon" alt="" src="/icon.svg" />
              <div className="moving-your-products">
                Moving your products across borders
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="text1">
            <OpportunityContainer
              whyChooseText="Why Choose"
              testimonialText="We create opportunity to reach potential"
              propWidth="438px"
              propWidth1="102px"
              propWidth2="438px"
            />
            <div className="leverage-agile-frameworks">{`Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. `}</div>
          </div>
          <div className="features">
            <ContainerSafePackage
              icon="/icon1.svg"
              safePackage="Safe Package"
              icon1="/icon2.svg"
              globalTracking="Global Tracking"
              icon2="/icon3.svg"
              inTimeDelivery="In Time Delivery"
            />
            <ContainerSafePackage
              icon="/icon4.svg"
              safePackage="Ship Everyware"
              icon1="/icon5.svg"
              globalTracking="24/7 Support"
              icon2="/icon6.svg"
              inTimeDelivery="Transparant Pricing"
              propWidth="258px"
              propWidth1="220px"
              propWidth2="199px"
              propWidth3="258px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
