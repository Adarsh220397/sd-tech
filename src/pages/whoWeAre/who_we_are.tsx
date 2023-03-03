import { Router } from "next/router";
import { useState, useEffect, Suspense } from "react";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import WhoWeAreContent from "./content";
import VersionApp from "./version_app";
import Image from "next/image";
import loader from "../../../assets/images/loader.gif";
import Loading from "../loading";
export default function WhoWeAre() {

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   Router.events.on('routeChangeStart', () => setLoading(true));
  //   Router.events.on('routeChangeComplete', () => setLoading(true));
  //   Router.events.on('routeChangeError', () => setLoading(false));
  //   console.log('---------------');
  //   return () => {
  //     Router.events.off('routeChangeStart', () => setLoading(true));
  //     Router.events.off('routeChangeComplete', () => setLoading(false));
  //     Router.events.off('routeChangeError', () => setLoading(false));
  //   };
  // }, [Router.events]);
  return (
    <>
{
// loading ? 
    //  <div className={styles.wrapper}>
    // <Image
    //                   src={loader}
    //                   alt="loader"
    //                   style={{
    //                     verticalAlign: "middle",
    //                   }}
                    
    //                   priority
    //                 />
           
    //     </div> 
        // :
        <Suspense fallback={<Loading />}>
        <div>
    <Header darkLogo={true} pageName={'WhoWeAre'}/>
     <div style={{
        backgroundColor:"white",
       
     }}>
      <div>
        <div className={styles.whoWeAreBanner}>
          <div className={styles.whoWeAreContainer}>
            <div className={styles.whoWeAreBannerContent}>
              <div className={styles.whoWeAreBannerTitle}>
                        <h1 className={styles.whoWeAreBannerTitleH1}>{'Who We Are'}</h1>
                    </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <WhoWeAreContent/>
      <VersionApp/>
      
      <OurClients/>
      <Footer/>
      </div>
      </Suspense>
    }
    </>
  );
}
