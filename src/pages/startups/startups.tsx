import Image from "next/image";
import styles from "../../app/page.module.css";


export default function StartUp() {
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
                For Startups
                  <hr className={styles.homeHeaderContentInnerBox}></hr>
                </h1>
                <p className={styles.homeHeaderContentInnerP}>
                We extend our assistance to startups with our expertise on product
                ideation, UX/UI design and MVP development.
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
