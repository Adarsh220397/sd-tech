import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import CurrentOpennings from "./current_opennings";


export default function Careers() {
  return (
    <>
   <Header darkLogo={false} pageName={'Career'}/>
      <div >
        <div > 
        {/* className={styles.homeHeader} */}

       
        <div className={styles.homeHeaderServices}>


        <div className={styles.bgImageForCareers}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.serviceHeaderContentInner}>
                <h1>
                Come work with us!
                 
                </h1>
                <p >
                {"We're looking for talented individuals that want to do great work with amazing people."}
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <CurrentOpennings/>
      <OurClients/>
      <Footer/>
    </>
  );
}
