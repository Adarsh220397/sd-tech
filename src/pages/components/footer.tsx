import Image from "next/image";
import styles from "../../app/page.module.css";
import logoText from "../../../assets/images/logoText.svg";
import linkedIn from "../../../assets/images/linkedin.svg";

export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "block",
          backgroundColor: "#eee",
          paddingTop: 30,
          paddingLeft: 150,
          paddingRight: 150,
          paddingBottom: 30,
        }}
      >
        <div className={styles.container}>
          <div>
            <div className={styles.row}>
              <div className={styles.colMd3}>
                <div className={styles.footerLogoImg}>
                  <Image src={logoText} alt="StudioDiseno" priority />
                  <div className={styles.tagLineH5}>
                    <h5>UX/UI Design & Branding Agency</h5>
                  </div>
                </div>
              </div>

              <div className={styles.colMd3}>
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
              <div className={styles.colMd4}>
                <div className={styles.digitalAddress}>
                  <h5>
                    E-mail:{" "}
                    <a href={"mailto:hello@studiodiseno.com"}>
                      hello@studiodiseno.com
                    </a>
                  </h5>
                  <h5>
                    Contact: <a href="tel:+91 44 42632026"> +91 44 42632026</a>
                  </h5>
                </div>
                <div className={styles.physicalAddress}>
                  <h6>India</h6>
                  <h5>No.108, Theyagaraya Road, T Nagar,</h5>
                  <h5>Chennai - 17, India.</h5>
                  <a href={"https://goo.gl/maps/cGemWsnPPi1Ja5G7A"}>
                    View Map{" "}
                  </a>
                </div>
                <div className={styles.physicalAddress}>
                  <h6>USA</h6>
                  <h5>186 Princeton Hightstown Rd, Bldg 3,</h5>
                  <h5>Suite 10, West Windsor, NJ 08550.</h5>
                  <a href={"https://goo.gl/maps/M1qFmNvrbmgx6tMTA"}>
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
