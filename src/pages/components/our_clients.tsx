import Image from "next/image";
import styles from "../../app/page.module.css";
import capgeminiLogo from "../../../assets/images/clients/Clientlogo/Capgemini_Logo.png";
import stdchd from "../../../assets/images/clients/Clientlogo/scb-logo.png";
import facilgo from "../../../assets/images/clients/Clientlogo/logo-facilgo.png";
import eventzilla from "../../../assets/images/clients/Clientlogo/Eventzilla.png";
import milesMedia from "../../../assets/images/clients/Clientlogo/8kMilesLogo.png";
import mevents from "../../../assets/images/clients/Clientlogo/mevents.png";
import altech from "../../../assets/images/clients/Clientlogo/altech-logo.png";
import creditMantri from "../../../assets/images/clients/Clientlogo/cMLogo.png";
import conectionUnlimited from "../../../assets/images/clients/Clientlogo/connectionUnlimited.png";
import icube from "../../../assets/images/clients/Clientlogo/icube-logo.png";
import iLogo from "../../../assets/images/clients/Clientlogo/intellect-logo.png";
import tcmLogo from "../../../assets/images/clients/Clientlogo/logo_tcm.png";
import meshDynamics from "../../../assets/images/clients/Clientlogo/mesh-dynamics.png";
import secova from "../../../assets/images/clients/Clientlogo/secova_logo.png";
import tagStone from "../../../assets/images/clients/Clientlogo/Tagstone.png";
import trueRCM from "../../../assets/images/clients/Clientlogo/trueRCM.png";
import weinvest from "../../../assets/images/clients/Clientlogo/weinvest.png";
import tsLogo from "../../../assets/images/clients/Clientlogo/tie-silicon-logo.png";
interface IProps {
  content:string;
}

export default function OurClients({content }:IProps) {
  return (
    <>
      <div 
        
       className={styles.ourClientsWrap}
      > 
        <div 
        // className={styles.ourClientContainer}
         
        >
          <div className={styles.ourClientsHeader}>
            <div className={styles.sectionTitle}>
              <h1>Our Clients</h1>
            </div>
            <div className={styles.ourClientsDescription}>
            {/* {content.map((text)=> {
              return <p> {text}</p>
            })} */}
           
              <p>  {content}
                {/* We’ve been grateful to work with a wide range of verticals. Our
                creativity enables us to collaborate on many different types of
                projects from Branding Design to enterprise software. */}
              </p>
            </div>
          </div>

          <div>
            <div className={styles.ourClientList}>
              <div className={styles.ourClientListView}>
                <div
                  style={{
                    flexDirection: "row",
                    display:'flex',
                    columnGap:'50px'
                  }}
                >
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={capgeminiLogo}
                      alt="capgemini"
                      style={{
                        verticalAlign: "middle",
                      }}
                    className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={stdchd}
                      alt="stdchd"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={facilgo}
                      alt="facilgo"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={eventzilla}
                      alt="eventzilla"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={milesMedia}
                      alt="milesMedia"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={mevents}
                      alt="mevents"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
              
                </div>
              </div>
            
              <div className={styles.ourClientListView}>
                <div
                  style={{
                    flexDirection: "row",
                    display:'flex',
                    columnGap:'50px'
                  }}
                >
                  <div className={styles.ourClientListViewBox}>
                    <Image
                      src={altech}
                      alt="altech"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={creditMantri}
                      alt="creditMantri"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={conectionUnlimited}
                      alt="conectionUnlimited"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={icube}
                      alt="icube"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={iLogo}
                      alt="iLogo"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={tcmLogo}
                      alt="tcmLogo"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
              
                </div>
              </div>

              <div className={styles.ourClientListView}>
                <div
                  style={{
                    flexDirection: "row",
                    display:'flex',
                    columnGap:'50px'
                  }}
                >
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={meshDynamics}
                      alt="meshDynamics"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={secova}
                      alt="secova"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={tagStone}
                      alt="tagStone"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={trueRCM}
                      alt="trueRCM"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={weinvest}
                      alt="weinvest"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
                  <div  className={styles.ourClientListViewBox}>
                    <Image
                      src={tsLogo}
                      alt="tsLogo"
                      style={{
                        verticalAlign: "middle",
                      }}
                      className={styles.ourClientListViewImg}
                      priority
                    />
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
