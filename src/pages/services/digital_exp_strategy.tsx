import Image from "next/image";
import styles from "../../app/page.module.css";
import digitalExpImage from "../../../assets/images/services/digitalExperience.png";
export default function DigitalExpStrategy({heading,description,contentList, image}:any) {
  return (
    <>
      <div style={{
        display:'block'
      }}>
        <div className={styles.container}
          // style={{
          //   width: "100%",
          //   paddingRight: "15px",
          //   paddingLeft: "15px",
          //   marginRight: "auto",
          //   marginLeft: "auto",
          // }}
        >
          <div className={styles.servicesList}>
          <div  className={styles.row}
            // style={{
            //  marginLeft:'-15px',
            //  marginRight:'-15px',
         
            //   display: "flex",
            // }}
          >
            <div style={{
                  flex: '0 0 50%',
                  maxWidth: '50%',
                  position: 'relative',
                  width: '100%',
                  paddingRight:'15px',
                  paddingLeft: '15px'
                  
            }}>
              <div style={{
                    boxSizing: 'border-box',
              }}>
                <Image
                  src={'https:'+image}
                  alt="Vercel Logo"
              
                  width={512}
                  height={452}
                  priority
                />
              </div>
            </div>
            <div style={{
                  flex: '0 0 50%',
                  maxWidth: '50%',
                  position: 'relative',
                  width: '100%',
                  paddingRight:'15px',
                  paddingLeft: '15px'
                  
            }}>
                <div style={{
                    boxSizing: 'border-box',
              }}>
              <div className={styles.servicesListDesc}>
                <div className={styles.tabContentInner}>
                  <h3>{heading}</h3>
                  <p>
{description}
                  </p>
                  <ul>
                    <li>Product Strategy</li>
                    <li>Marketing Strategy</li>
                    <li>User Experience Strategy</li>
                    <li>Content Strategy</li>
                  </ul>
                </div>
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
