import Image from "next/image";
import styles from "../../app/page.module.css";


export default function Careers() {
  return (
    <>
   
      <div >
        <div > 
        {/* className={styles.homeHeader} */}

       
        <div className={styles.homeHeaderServices}>


        <div className={styles.bgImageForStartUp}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.homeHeaderContentInner}>
                <h1>
                Come work with us!
                  <hr className={styles.homeHeaderContentInnerBox}></hr>
                </h1>
                <p className={styles.homeHeaderContentInnerP}>
                We're looking for talented individuals that want to do great work with amazing people.
                </p>
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
