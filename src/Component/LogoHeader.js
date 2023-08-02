import styles from "./LogoHeader.module.css";
import logo from './Image/time1.jpg'
import logo1 from './Image/email1.jpg'
import logo2 from './Image/call.jpg'
import logo3 from './Image/instagram.jpg'
import logo4 from './Image/facebook.jpg'
import logo5 from './Image/tw.jpg'
import logo6 from './Image/link.jpg'
import logo7 from './Image/space.jpg'
const LogoHeader = () => {
  return (
   
    <div className={styles.logoHeader}>
      <div className={styles.addressBar} Address>
        <div className={styles.time}>
         
        <img src={logo} className={styles.logo} alt=""/>
          <div className={styles.monSatContainer}>
            <p className={styles.monSat}>Mon - Sat 9.00 - 18.00</p>
            <p className={styles.monSat}>Sunday Closed</p>
          </div>
        </div>
        <div className={styles.email}>
        <img src={logo1} className={styles.logo1} alt=""/>
          <div className={styles.emailDemologisticscom}>
            <p className={styles.monSat}>
              <a
                className={styles.logisticscom}
                href="mailto:contact@hvcargologistics.com"
                target="_blank"
              >
                Email
              </a>
            </p>
            <p className={styles.monSat}>
              demo
              <a
                className={styles.logisticscom}
                href="mailto:contact@hvcargologistics.com"
                target="_blank"
              >
                @logistics.com
              </a>
            </p>
          </div>
        </div>
        <div className={styles.call}>
          <div className={styles.callUs91Container}>
            <p className={styles.monSat}>{`Call Us `}</p>
            <p className={styles.monSat}>+91 1111111111</p>
          </div>
          <img src={logo2} className={styles.logo2} alt=""/>
        </div>
      </div>
      <div className={styles.follow} media>
      
      <img src={logo3} className={styles.logo3} alt=""/>
      <img src={logo7} className={styles.logo7} alt=""/>
      <img src={logo4} className={styles.logo4} alt=""/>
      <img src={logo7} className={styles.logo7} alt=""/>
      <img src={logo5} className={styles.logo5} alt=""/>
      <img src={logo7} className={styles.logo7} alt=""/>
      <img src={logo6} className={styles.logo6} alt=""/>
      
      </div>
      
    </div>
   
  );
};

export default LogoHeader;
