import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import WhatWeDo from "./what_we_do";


export default function Main() {
  return (
    <>
   <Header darkLogo={false} pageName={'Home'}/>
      <div >
    


        <div className={styles.bgImage}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.homeContentInner}>

                <h1>
               <div> {"WE DON'T JUST DESIGN"}</div>
               
               <div> {"WE DEFINE EXPERIENCES"}</div>
           
             
                </h1>
                <p >
                {"We are a bunch of smart and passionate people looking to reinvent the possibilities when technology and design meet."}
                </p>
              </div>
            </div>
          </div>
          </div>
          </div>
  
{/*   
<WhatWeDo/>
      <OurClients/>
      <Footer/>  */}
    </>
  );
}
