import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";

export default function ContactUs() {
  return (
    <>
    <Header/>
      <div>
        <div>
          {/* className={styles.homeHeader} */}

          <div className={styles.homeHeaderServices}>
            <div className={styles.homeHeaderContent}>
              <div className={styles.container}>
                <div className={styles.homeHeaderContentInner}>
                  <h1>
                    We’ve been waiting for you...
                    <hr className={styles.homeHeaderContentInnerBox}></hr>
                  </h1>
                  <p className={styles.homeHeaderContentInnerP}>
                    Ready to begin your journey?
                  </p>
                  <p className={styles.homeHeaderContentInnerP}>
                    Get Started With Studio Diseno Today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurClients/>
      <Footer/>
    </>
  );
}
