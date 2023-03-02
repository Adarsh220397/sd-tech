import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import linkedIn from "../../../assets/images/linkedin.svg";

export default function ContactUs() {
  return (
    <>
      <Header darkLogo={true} pageName={"Contact"} />

      <div className={styles.contactUsWrap}>
        <div className={styles.careerContainer}>
          <div className={styles.contactUsRow}>
            <div className={styles.colMd8}>
              <div className={styles.contactUsWrapForm}>
                <h3>{"We 've been waiting for you..."}</h3>
                <h5>{"Ready to begin your journey?"}</h5>
                <p>{" Get Started With Studio Diseno Today!"}</p>
                <form name="contactForm">
                  <div className={styles.checkboxGroup}>
                    <div className={styles.groupTitle}>
                      <h4 className={styles.formTitleH4}>Service</h4>
                      <span id="service" className={styles.spanInfo}></span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div className={styles.chip}>
                        <label>
                          <span> Branding</span>
                        </label>
                      </div>
                      <div className={styles.chip}>
                        <label>
                          <span> Web design</span>
                        </label>
                      </div>
                      <div className={styles.chip}>
                        <label>
                          <span> App design</span>
                        </label>
                      </div>
                      <div className={styles.chip}>
                        <label>
                          <span>Interaction design</span>
                        </label>
                      </div>
                      <div className={styles.chip}>
                        <label>
                          <span>Animation</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.radiobuttonGroup}>
                    <div className={styles.groupTitle}>
                      <h4 className={styles.formTitleH4}>Budget</h4>
                      <span id="service" className={styles.spanInfo}></span>
                    </div>
                    <input
                      type="radio"
                      name="budget"
                      value="$15K - $30K"
                      id="$15K - $30K"
                    />
                    <label className={styles.chip}>$15K - $30K</label>
                    <input
                      type="radio"
                      name="budget"
                      value="$30K - $50K"
                      id="$30K - $50K"
                    />
                    <label className={styles.chip}>$30K - $50K</label>
                    <input
                      type="radio"
                      name="budget"
                      value="$50K - $80K"
                      id="$50K - $80K"
                    />
                    <label className={styles.chip}>$50K - $80K</label>
                    <input
                      type="radio"
                      name="budget"
                      value="$80K and above"
                      id="$80K and above"
                    />
                    <label className={styles.chip}>$80K and above</label>
                  </div>
                  <div className={styles.rowInput}>
                    <div className={styles.colInput}>
                      <div className={styles.inputField}>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />{" "}
                        <br />
                        <span className={styles.info} id="nameInfo"></span>
                      </div>
                    </div>
                    <div className={styles.colInput}>
                      <div className={styles.inputField}>
                        <input
                          type="mail"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />{" "}
                        <br />
                        <span className={styles.info} id="mail"></span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.fileUpload}>
                    <div className={styles.inputField}>
                      <div className={styles.inputFieldFullWidth}>
                        <input
                          style={{ width: "98%" }}
                          type="text"
                          name="message"
                          id="message"
                          placeholder="Project Details"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      styles.exploreMore + " " + styles.exploreMoreContact
                    }
                  >
                    <div className={styles.exploreMoreanchore}>
                      <input
                        type="submit"
                        id={styles.sendmessage}
                        className="btn-submit"
                        value="Send"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                id="result"
                style={{
                  color: "#ED1C24",
                  fontSize: "14px",
                  padding: "15px",
                }}
              ></div>
            </div>
            <div className={styles.formColMd4}>
              <div className={styles.contactUsWrapFormDetails}>
                <h3>Contact us</h3>
                <div className={styles.virtualAddress}>
                  <a href="mailto:hello@studiodiseno.com">
                    {'E-mail: hello@studiodiseno.com'}
                  </a>
                  </div>
                  <div style={{
                    height:'5px'
                  }}
                  ></div>
                  <div className={styles.virtualAddress}>
                  <a href="tel:+91 44 42632026">{"Contact: +91 44 42632026"} </a>
                  </div>
                <div className={styles.physicalAddress}>
                  <h4>No.108, Theyagaraya Road,
                    <br></br>
                  T Nagar, Chennai - 17, India.</h4>
                  <a
                    href="https://goo.gl/maps/cGemWsnPPi1Ja5G7A"
                    target="_blank"
                  >
                    View Map{" "}
                  </a>
                </div>
                <div className={styles.physicalAddress}>
                  <h4>
                    186 Princeton Hightstown Rd, Bldg 3, Suite 10, West Windsor,
                    NJ 08550
                  </h4>
                  <a
                    href="https://goo.gl/maps/M1qFmNvrbmgx6tMTA"
                    target="_blank"
                  >
                    View Map{" "}
                  </a>
                </div>
                <div className={styles.socialMediaCareerSite}>
                  <h3>Follow</h3>
                  
                  
                      <a
                        href="https://www.linkedin.com/company/sdtech-india"
                        target="_blank"
                      >
                        <Image src={linkedIn} alt="linkedin" priority />
                      </a>
                   
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurClients />
      <Footer />
    </>
  );
}
