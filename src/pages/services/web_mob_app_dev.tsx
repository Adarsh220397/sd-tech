import Image from "next/image";
import styles from "../../app/page.module.css";
import webApp from "../../../assets/images/services/webApp.png";
export default function WebMobileApplicationDev() {
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
                <h3>Web & Mobile Application Development</h3>
                <p>
                  Our full stack development services will help you create
                  modern applications on time and under budget. We can assist
                  you with all of your application development needs from
                  mobile, web development, backend development to API
                  development, integration and deployment.
                </p>

                <ul>
                  <li>Mobile Apps (Native and Hybrid)</li>
                  <li>Front-end</li>
                  <li>Web Development</li>
                </ul>
              </div>
              </div>
              </div>
            </div>
            <div className={styles.headerSectionRowColMd6}>
              <div className={styles.servicesListImage}>
                <Image
                  src={webApp}
                  alt="webApp"
                  style={{
                    verticalAlign: "middle",
                  }}
                  width={540}
                  height={540}
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
