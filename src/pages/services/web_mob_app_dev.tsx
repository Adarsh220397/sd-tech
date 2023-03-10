import Image from "next/image";
import styles from "../../app/page.module.css";
import webApp from "../../../assets/images/services/webApp.png";
export default function WebMobileApplicationDev({heading,description,contentList, image}:any) {
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
                <h3>{heading}</h3>
                <p>
           {description}
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
                  src={'https:'+image}
                  alt="webApp"
                  style={{
                    verticalAlign: "middle",
                  }}
                  width={512}
                  height={452}
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
