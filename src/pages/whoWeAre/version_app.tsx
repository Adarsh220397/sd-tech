import styles from "../../app/page.module.css";

export default function VersionApp({ heading, versionAppContent }: any) {
  return (
    <>
      <div>
        <div className={styles.versionAppDesign}>
          <div className={styles.container}>
            <div className={styles.versionAppRow}>
              <div className={styles.colMd8}>
                <div className={styles.versionAppDesignContent}>
                  <h1>{heading}</h1>
                  <p>{versionAppContent}</p>
                  <div className={styles.exploreMoreBlack}>
                    <div className={styles.exploreMoreanchore}>
                      <a href="">Get In Touch</a>
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
