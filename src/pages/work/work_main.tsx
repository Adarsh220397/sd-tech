import Image from "next/image";
import styles from "../../app/page.module.css";
import ContentImagesOne from "./content";
import Header from "./header";

export default function Work() {
  return (
    <>
   
      <div >
        <div > 
        {/* className={styles.homeHeader} */}

       
        <div className={styles.homeHeaderServices}>


        <div className={styles.bgImageForServices}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.homeHeaderContentInner}>
                <h1>
                  Work
                  <hr className={styles.homeHeaderContentInnerBox}></hr>
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
        </div>
      </div>
     
    </>
  );
}
