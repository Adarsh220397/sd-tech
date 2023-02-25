import styles from "../../app/page.module.css";

export default function WhoWeAre() {
  return (
    <>
     <div style={{
        backgroundColor:"white",
        minHeight:'100vh'
     }}>
      <div>
        <div className={styles.whoWeAreBanner}>
          <div className={styles.whoWeAreContainer}>
            <div className={styles.whoWeAreBannerContent}>
              <div className={styles.whoWeAreBannerTitle}>
                        <h1 className={styles.whoWeAreBannerTitleH1}>Who We Are</h1>
                    </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
