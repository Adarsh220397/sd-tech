import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";

export default function ContactUs() {
  return (
    <>
      <Header darkLogo={true}  pageName={'Contact'}/>
      <div>
        <div>
          <div className={styles.bgContactUs}>
            <div className={styles.contactUsWrap}>
              <div className={styles.container}>
                <div className={styles.contactUsRow}>
                  <div className={styles.contactUsWrapForm}>
                    <h3>{"We 've been waiting for you..."}</h3>
                    <h5>{"Ready to begin your journey?"}</h5>
                    <p>{" Get Started With Studio Diseno Today!"}</p>
                    <div className={styles.checkboxGroup}>
                      <div className={styles.groupTitle}>
                        <h4 className={styles.formTitleH4}>Service</h4>
                     <span id="service" className={styles.spanInfo}></span>
                      </div>
                      <div style={{
                        display:'flex',
                        flexDirection:'row',
                        
                      }}>
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
                  </div>
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
