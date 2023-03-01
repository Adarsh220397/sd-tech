import Image from "next/image";
import styles from "../../app/page.module.css";
import redefinedShopping from "../../../assets/images/work/redefinedShopping.png";
import digialMusic from "../../../assets/images/work/digialMusic.png";
import optimizingDigital from "../../../assets/images/work/optimizingDigital.png";
import hrsolution from "../../../assets/images/work/hrsolution.jpeg";
import solvecubeHRBanner from "../../../assets/images/work/solvecubeHRBanner.png";
import weInvestSmallBanner from "../../../assets/images/work/weInvestSmallBanner.png";


export default function ContentImagesOne() {
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className={styles.headerSectionRowColMd6}>
              <Image
                src={redefinedShopping}
                alt="redefinedShopping"
                priority
                height={450}
                width={450}
              />

              <h5 className={styles.workWrapListWrapH5}>E-commerce</h5>
              <h4 className={styles.workWrapListWrapH4}>
                Redefined Mobile shopping Experience
              </h4>
            </div>

            <div className={styles.headerSectionRowColMd6}>
              <Image
                src={digialMusic}
                alt="digialMusic"
                priority
                height={450}
                width={450}
              />

              <h5 className={styles.workWrapListWrapH5}>Digital Strategy</h5>
              <h4 className={styles.workWrapListWrapH4}>Digital Music app</h4>
            </div>
          </div>
     
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className={styles.headerSectionRowColMd6}>
              <Image
                src={optimizingDigital}
                alt="optimizingDigital"
                priority
                height={450}
                width={450}
              />

              <h5 className={styles.workWrapListWrapH5}>Finsever</h5>
              <h4 className={styles.workWrapListWrapH4}>
                Optimising digital credit marketplace
              </h4>
            </div>

            <div className={styles.headerSectionRowColMd6}>
              <Image src={hrsolution} alt="hrsolution" priority height={450} width={450} />

              <h5 className={styles.workWrapListWrapH5}>HR Solutions</h5>
              <h4 className={styles.workWrapListWrapH4}>
                Reforming people management solutions
              </h4>
            </div>
          </div>
       
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className={styles.headerSectionRowColMd6}>
              <Image
                src={solvecubeHRBanner}
                alt="solvecubeHRBanner"
                priority
                height={450}
                width={450}
              />

              <h5 className={styles.workWrapListWrapH5}>Digital HR Marketplace</h5>
              <h4 className={styles.workWrapListWrapH4}>
              HR marketplace to buy, sell and interact for HR solutions online
              </h4>
            </div>

            <div className={styles.headerSectionRowColMd6}>
              <Image src={weInvestSmallBanner} alt="weInvestSmallBanner" priority height={450}  width={450}/>

              <h5 className={styles.workWrapListWrapH5}>Finance</h5>
              <h4 className={styles.workWrapListWrapH4}>
              Brand recognition through an efficient app design
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
