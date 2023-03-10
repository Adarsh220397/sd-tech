import Image from "next/image";
import styles from "../../app/page.module.css";
import userExp from "../../../assets/images/services/userExp.png";


export default function UserExperienceAndDesign({heading,description,contentList, image}:any) {
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
              <div className={styles.servicesListImage}>
                <Image
                  src={'https:'+image}
                  alt="UserExp"
                  style={{
                    verticalAlign: "middle",
                  }}
                  width={512}
                  height={452}
                  priority
                />
              </div>
            </div>
            <div className={styles.headerSectionRowColMd6}>
              <div className={styles.servicesListDesc}>
                <div className={styles.tabContentInner}>
                  <h3>{heading}</h3>
                  <p>
        {description}
                  </p>
                  <ul>
                    <li>User Analysis</li>
                    <li>Wireframes</li>
                    <li>User Interface Design</li>
                    <li>Prototyping</li>
                    <li>Information Architecture</li>
                    <li>Interaction Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
