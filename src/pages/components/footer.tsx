import Image from "next/image";
import styles from "../../app/page.module.css";
import logoText from "../../../assets/images/logoText.svg";
import linkedIn from "../../../assets/images/linkedin.svg";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}
    
      >
        <div className={styles.footerContainer}>
          <div style={{
            boxSizing:"border-box",
          }}>
            <div className={styles.footerRow}>
              <div className={styles.colMd3} >
                <div className= {styles.footerLogo}>
                  <Image src={logoText} alt="StudioDiseno" priority className={styles.footerLogoImg} />
                 
                    <h5 className={styles.tagLineH5}>UX/UI Design & Branding Agency</h5>
                 
                </div>
              </div>

              <div  className={styles.colMd3}>
                <div className={styles.menuList}>
                  <ul>
                    <li>
                      <a href="./work.html">Work</a>
                    </li>

                    <li>
                      <a href="./services.html">Services</a>
                    </li>
                    <li>
                      <a href="./whoweare.html">Who We Are</a>
                    </li>
                    <li>
                      <a href="./startup.html">For Startups</a>
                    </li>
                    <li>
                      <a href="./careers.html">Career</a>
                    </li>
                    <li>
                      <a href="./contactform.html">Get in touch</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.colMd4} >
                <div className={styles.digitalAddress}>
                  <h5>
                    E-mail:{" "}
                    <a  style={{
                    textDecoration:'none'
                  }}href={"mailto:hello@studiodiseno.com"}>
                      hello@studiodiseno.com
                    </a>
                  </h5>
                  
                  <h5>
                    Contact: <a  style={{
                    textDecoration:'none'
                  }} href="tel:+91 44 42632026"> +91 44 42632026</a>
                  </h5>
                </div>
                <div className={styles.physicalAddress}>
                  <h6>India</h6>
                  <h5>No.108, Theyagaraya Road, T Nagar,
                    <br></br>
                 Chennai - 17, India.</h5>
                  <a  style={{
                    textDecoration:'none'
                  }} href={"https://goo.gl/maps/cGemWsnPPi1Ja5G7A"}>
                    View Map{" "}
                  </a>
                </div>
                <div className={styles.physicalAddress}>
                  <h6>USA</h6>
                  <h5>186 Princeton Hightstown Rd, Bldg 3,
                    <br></br>
                  Suite 10, West Windsor, NJ 08550.</h5>
                  <a style={{
                    textDecoration:'none'
                  }} href={"https://goo.gl/maps/M1qFmNvrbmgx6tMTA"}>
                    View Map{" "}
                  </a>
                </div>
              </div>

              <div className={styles.colMd2}>
                <div className={styles.socialMedia}>
                  <a href={"https://www.linkedin.com/company/sdtech-india"}>
                    <Image src={linkedIn} alt="facebook" priority />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyRightsBottom}>
          <h5>©2019 StudioDiseño. All Rights Reserved.</h5>
        </div>
      </div>
    </>
  );
}
