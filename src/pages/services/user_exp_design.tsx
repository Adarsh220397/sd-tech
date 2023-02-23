import Image from "next/image";
import styles from "../../app/page.module.css";
import userExp from "../../../assets/images/services/userExp.png";


export default function UserExperienceAndDesign() {
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
                  src={userExp}
                  alt="UserExp"
                  style={{
                    verticalAlign: "middle",
                  }}
                  width={540}
                  height={540}
                  priority
                />
              </div>
            </div>
            <div className={styles.headerSectionRowColMd6}>
              <div className={styles.servicesListDesc}>
                <div className={styles.tabContentInner}>
                  <h3>User Experience and Design</h3>
                  <p>
                    We combine human-centred design with leading-edge technology
                    to deliver compelling experiences that move markets and
                    transform businesses. We can assist you with UX research,
                    analysis, IA, wire framing, UI design, interaction,
                    prototyping and UX testing.
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
