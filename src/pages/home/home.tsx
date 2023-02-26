import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import WhatWeDo from "./what_we_do";


export default function Main() {
  return (
    <>
   <Header/>
      <div >
        <div > 
        {/* className={styles.homeHeader} */}

       
        <div className={styles.homeHeaderServices}>


        <div className={styles.bgImage}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.homeHeaderContentInner}>
                <h1>
                WE DON'T JUST DESIGN
                  
                </h1>
                <br></br>
                <h1>
                WE DEFINE EXPERIENCES
                  <hr className={styles.homeHeaderContentInnerBox}></hr>
                </h1>
                <p className={styles.homeHeaderContentInnerP}>
                We are a bunch of smart and passionate people looking to reinvent the possibilities when technology and design meet.
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
  
<WhatWeDo/>
      <OurClients/>
      <Footer/> 
    </>
  );
}
