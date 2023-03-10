import styles from "../../app/page.module.css";
import alesia from "../../../assets/images/whoWeAre/alesia-kazantceva.png";
import priscilla from "../../../assets/images/whoWeAre/priscilla.png";
import brooke from "../../../assets/images/whoWeAre/brooke-cagle.png";
import Image from "next/image";
import { createClient } from "contentful";


export default function WhoWeAreContent({content1 , content2, image1, image2, image3}:any) {
  return (
    <>
          <style jsx>
        {`
     .whoWeAreContentA {
      padding: 60px 0;
    }
        `}
      </style>
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <div className="whoWeAreContentA"> 
                    <div className={styles.whoWeAreContentContainer}>
            <div className={styles.whoWeAreContentPara}>
              <p className={styles.whoWeAreContentP}>
          {content1}
              </p>
              <div className={styles.whoWeAreStatatics}>
                <div className={styles.whoWeAreStataticsList}>
                  <h1>30+</h1>
                  <p>Employees</p>
                </div>
                <div className={styles.whoWeAreStataticsList}>
                  <h1>2</h1>
                  <p>Locations</p>
                </div>
                <div className={styles.whoWeAreStataticsList}>
                  <h1>20+</h1>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className={styles.whoWeAreGallery}>
                <div className={styles.whoWeAreGalleryContent}>

                  
                  <h3>
               {content2}
                  </h3>
                </div>
                <div className={styles.whoWeAreGalleryImage}>
                  <div  >
                    <Image  src={'https:' + image1} alt="alesia" priority className={styles.whoWeAreGalleryImageImg}
                     width={
                      '380'
                    }
                    height={
                      '420'
                    }
                     />
                  </div>
                  <div >
                    <Image
                     width={
                      '380'
                    }
                    height={
                      '420'
                    }
                    src={'https:' + image2} alt="priscilla" priority className={styles.whoWeAreGalleryImageImg} />
                  </div>
                  <div>
                    <Image src={'https:' + image3} alt="brooke" priority className={styles.whoWeAreGalleryImageImg} 
                     width={
                      '380'
                    }
                    height={
                      '420'
                    }
                    
                    />
                    {/* <img class="lazy" data-src="./images/whoWeAre/alesia-kazantceva.png" alt="whoWeAreGallery">
                        <img class="lazy" data-src="./images/whoWeAre/priscilla.png" alt="whoWeAreGallery">
                        <img class="lazy" data-src="./images/whoWeAre/brooke-cagle.png" alt="whoWeAreGallery"> */}
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

