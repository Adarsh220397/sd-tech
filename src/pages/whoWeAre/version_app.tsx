import styles from "../../app/page.module.css";

export default function VersionApp() {
  return (
    <>
      <div>
        <div className={styles.versionAppDesign}>
          <div className={styles.versionAppContainer}>
            <h1 className={styles.versionAppDesignContentH1}>
              Get the first version Of App Design for free
            </h1>
            <p className={styles.versionAppDesignContentP}>
              Our Product Realization service enables businesses to quickly and
              effectively deliver products, software and services that move
              markets and enhance the human experience. By adopting a
              cross-disciplinary, iterative approach and testing early via
              prototypes, we ensure compelling concepts are implementable, that
              result in higher quality designs and faster time to market.
            </p>
            <div className={styles.exploreMoreBlack}>
              <div className={styles.exploreMoreanchore}>
                <a href="">Get In Touch</a>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
