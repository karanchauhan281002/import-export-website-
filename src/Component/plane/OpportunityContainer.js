import { useMemo } from "react";
import "./OpportunityContainer.css";
const OpportunityContainer = ({
  whyChooseText,
  testimonialText,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const titleStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const subTextStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const weCreateOpportunityStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="title1" style={titleStyle}>
      <div className="sub-text" style={subTextStyle}>
        <div className="pattern" />
        <div className="text4">
          <div className="why-choose">{whyChooseText}</div>
        </div>
      </div>
      <div className="we-create-opportunity" style={weCreateOpportunityStyle}>
        {testimonialText}
      </div>
    </div>
  );
};

export default OpportunityContainer;
