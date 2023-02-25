import Image from "next/image";
import styles from "../../app/page.module.css";
import mvp from "../../../assets/images/startup/mvp.png";
export default function MVP() {
  return (
    <>
      <div
        className={styles.main}
        style={{
          padding: 100,
        }}
      >
        <div
          style={{
            display: "block",
          }}
        >
          <div className={styles.row}>
            <div className={styles.headerSectionRowColMd6}>
              <div>
                <Image
                  src={mvp}
                  alt="mvp"
                  style={{
                    verticalAlign: "middle",
                  }}
            
                  priority
                />
              </div>
            </div>
            <div className={styles.headerSectionRowColMd6}>
              <div className={styles.servicesListDesc}>
                <div className={styles.tabContentInner}>
                     <div className={styles.tabContentInnerBlock}>
                  <h3>MVP</h3>
                  <p>
                  Delivering the core functionalities before project
                      completion with a team of experts would let us know the
                      bigger picture much early.
                  </p>
                  <ul>
                      <li>
                        Innovative implementation of the app with basic
                        functionality
                      </li>
                      <li>
                        Gain valuable insight on what works and what doesn’t
                      </li>
                      <li>Reduce implementation costs and time to market</li>
                      <li>
                        Understand how customers perceive the product before the
                        launch
                      </li>
                    </ul>
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
