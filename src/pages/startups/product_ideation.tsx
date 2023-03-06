import Image from "next/image";
import styles from "../../app/page.module.css";
import productionideation from "../../../assets/images/startup/productionideation.png";
export default function ProductIdeation() {
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
                  src={productionideation}
                  alt="productionideation"
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
                    <h3>Product Ideation</h3>
                    <p>
                      Just implementing things is definitely not how we build a
                      product. We approach products with a fresh perspective,
                      identify possibilities, and leverage team creativity to
                      build better and innovative solutions.
                    </p>
                    <ul>
                      <li>
                        Client engagements to determine goals and challenges
                      </li>
                      <li>
                        Periodical evaluation of needs and requirements using
                        user and stakeholder perspectives
                      </li>
                      <li>
                        Formalized product ideation based on goals and
                        objectives
                      </li>
                      <li>Determination of business logic</li>
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
