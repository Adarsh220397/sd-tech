import Image from "next/image";
import { Suspense } from "react";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import Loading from "../loading";
import DigitalExpStrategy from "./digital_exp_strategy";
import UserExperienceAndDesign from "./user_exp_design";
import WebMobileApplicationDev from "./web_mob_app_dev";

export default function Services() {
  return (
    <>
      <Suspense fallback={<Loading />}>
    <Header darkLogo={false} pageName={'Services'}/>
      <div >
        <div className={styles.bgImageForServices}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.serviceHeaderContentInner}>
                <h1>
                 <div>{'Services'}</div> 
                
                </h1>
                <p>
                  We deliver beautiful products and great experiences that users
                  love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DigitalExpStrategy/>
      <WebMobileApplicationDev/>
      <UserExperienceAndDesign/>
      <OurClients/>
      <Footer/>


      </Suspense>
    </>
  );
}
