import Image from "next/image";
import styles from "../../app/page.module.css";
import uxdesign from "../../../assets/images/startup/uxdesign.png";
export default function UIUXDesign() {
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
              <div className={styles.servicesListDesc}>
              <div className={styles.tabContentInner}>
              <div className={styles.tabContentInnerBlock}>
                <h3>UX/UI design</h3>
                <p>
                Creating the best user experience and customer satisfaction
                      through the impeccable UX and UI of the product with a team
                      of talented designers and developers.
                </p>

                <ul>
                      <li>Wireframing to create a prototype of the product</li>
                      <li>
                        Information Architecture to create an insightful structure
                      </li>
                      <li>Interactive design for seamless user engagement</li>
                      <li>Focus on ease of use and user-friendliness</li>
                    </ul>
              </div>
              </div>
              </div>
            </div>
            <div className={styles.headerSectionRowColMd6}>
              <div className={styles.servicesListImage}>
                <Image
                  src={uxdesign}
                  alt="uxdesign"
                  style={{
                    verticalAlign: "middle",
                  }}
               
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
