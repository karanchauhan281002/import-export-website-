import { useMemo } from "react";
import "./ContainerSafePackage.css";
const ContainerSafePackage = ({
  icon,
  safePackage,
  icon1,
  globalTracking,
  icon2,
  inTimeDelivery,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
}) => {
  const divStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const div2Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const div3Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div className="div2" style={divStyle}>
      <div className="div3" style={div1Style}>
        <img className="icon3" alt="" src={icon} />
        <div className="safe-package">{safePackage}</div>
      </div>
      <div className="div4" style={div2Style}>
        <img className="icon3" alt="" src={icon1} />
        <div className="safe-package">{globalTracking}</div>
      </div>
      <div className="div5" style={div3Style}>
        <img className="icon3" alt="" src={icon2} />
        <div className="safe-package">{inTimeDelivery}</div>
      </div>
    </div>
  );
};

export default ContainerSafePackage;
