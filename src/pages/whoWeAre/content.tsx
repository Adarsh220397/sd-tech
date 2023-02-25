import styles from "../../app/page.module.css";
import alesia from "../../../assets/images/whoWeAre/alesia-kazantceva.png";
import priscilla from "../../../assets/images/whoWeAre/priscilla.png";
import brooke from "../../../assets/images/whoWeAre/brooke-cagle.png";
import Image from "next/image";
export default function WhoWeAreContent() {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <div className={styles.whoWeAreContent}>
          <div className={styles.whoWeAreContentContainer}>
            <div className={styles.whoWeAreContentPara}>
              <p className={styles.whoWeAreContentP}>
                We are a bunch of passionate people at the intersection of
                design & technology, reinventing possibilities and pushing the
                envelope further with outstanding design solutions. We
                established ourselves in Chennai in 2014 with the aim of
                impacting the world in a positive way with our strong aesthetic
                sense.
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
                    A vibrant work culture that nurtures creativity and fosters
                    innovation is our secret.
                  </h3>
                </div>
                <div className={styles.whoWeAreGalleryImage}>
                  <div  >
                    <Image src={alesia} alt="alesia" priority className={styles.whoWeAreGalleryImageImg}/>
                  </div>
                  <div >
                    <Image src={priscilla} alt="priscilla" priority className={styles.whoWeAreGalleryImageImg} />
                  </div>
                  <div>
                    <Image src={brooke} alt="brooke" priority className={styles.whoWeAreGalleryImageImg} />
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
