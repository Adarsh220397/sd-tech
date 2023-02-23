import Image from "next/image";
import styles from "../../app/page.module.css";
import digitalExpImage from '../../../assets/images/services/digitalExperience.png';
export default function DigitalExpStrategy() {
  return (
    <>
      <div className={styles.main}
      style={{
      
        padding:100
      }} 
      >
        < div style={{
          display:'block'
        }}>
        <div className ={styles.row}>
        <div className={styles.headerSectionRowColMd6}>
          <div>
            <Image
              src= {digitalExpImage}
              alt="Vercel Logo"
              style={{
                verticalAlign: 'middle',
              
              }}
             width={540}
             height={540}
             
              priority
            />
          </div>
        </div>
        <div className={styles.headerSectionRowColMd6}>
          <div className={styles.servicesListDesc}>
            <div className={styles.tabContentInner}>
              <h3>Digital Experience Strategy</h3>
              <p>
                Our digital strategies framework will lead to customer adoption
                and ongoing engagement. We define product experience, Customer
                journeys, content strategy to help customers feel like they
                never need to go anywhere else.
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

    </>
  );
}
