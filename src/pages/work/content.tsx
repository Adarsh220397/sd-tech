import Image from "next/image";
import styles from "../../app/page.module.css";
import redefinedShopping from "../../../assets/images/work/redefinedShopping.png";
import digialMusic from "../../../assets/images/work/digialMusic.png";
import optimizingDigital from "../../../assets/images/work/optimizingDigital.png";
import hrsolution from "../../../assets/images/work/hrsolution.jpeg";
import solvecubeHRBanner from "../../../assets/images/work/solvecubeHRBanner.png";
import weInvestSmallBanner from "../../../assets/images/work/weInvestSmallBanner.png";

interface IProps {
  eCommerceContent: any;
  digiStrategyContent: any;
  finseverContent: any;
  hrSolutionContent: any;
  hrMarketPlaceContent: any;
  financeContent: any;
}

export default function ContentImagesOne({
  eCommerceContent,
  digiStrategyContent,
  finseverContent,
  hrSolutionContent,
  hrMarketPlaceContent,
  financeContent,
}: any) {
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
            {eCommerceContent.map((data: any, index: number) => (
              <div key = { data.key} className={styles.headerSectionRowColMd6}>
                <Image
                  src={"https:" + data.fields.image.fields.file.url}
                  alt="redefinedShopping"
                  priority
                  height={450}
                  width={450}
                />

                <h5 className={styles.workWrapListWrapH5}>
                  {data.fields.heading}
                </h5>
                <h4 className={styles.workWrapListWrapH4}>
                  {data.fields.description}
                </h4>
              </div>
            ))}
            {digiStrategyContent.map((data: any, index: number) => (
              <div key = { data.key} className={styles.headerSectionRowColMd6}>
                <Image
                  src={"https:" + data.fields.image.fields.file.url}
                  alt="digialMusic"
                  priority
                  height={450}
                  width={450}
                />
                <h5 className={styles.workWrapListWrapH5}>
                  {data.fields.heading}
                </h5>
                <h4 className={styles.workWrapListWrapH4}>
                  {data.fields.description}
                </h4>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {finseverContent.map((data: any, index: number) => (
              <div key = { data.key} className={styles.headerSectionRowColMd6}>
                <Image
                  src={"https:" + data.fields.image.fields.file.url}
                  alt="optimizingDigital"
                  priority
                  height={450}
                  width={450}
                />

                <h5 className={styles.workWrapListWrapH5}>
                  {data.fields.heading}
                </h5>
                <h4 className={styles.workWrapListWrapH4}>
                  {data.fields.description}
                </h4>
              </div>
            ))}
            {hrSolutionContent.map((data: any, index: number) => (
              <div   key={index} className={styles.headerSectionRowColMd6}>
                <Image
                  src={"https:" + data.fields.image.fields.file.url}
                  alt="hrsolution"
                  priority
                  height={450}
                  width={450}
                />

                <h5 className={styles.workWrapListWrapH5}>
                  {data.fields.heading}
                </h5>
                <h4 className={styles.workWrapListWrapH4}>
                  {data.fields.description}
                </h4>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {hrMarketPlaceContent.map((data: any, index: number) => (
              <div   key={index} className={styles.headerSectionRowColMd6}>
                <Image
                  src={"https:" + data.fields.image.fields.file.url}
                  alt="solvecubeHRBanner"
                  priority
                  height={450}
                  width={450}
                />

                <h5 className={styles.workWrapListWrapH5}>
                  {data.fields.heading}
                </h5>
                <h4 className={styles.workWrapListWrapH4}>
                  {data.fields.description}
                </h4>
              </div>
            ))}

            {financeContent.map((data: any, index: number) => (
              <div   key={index} className={styles.headerSectionRowColMd6}>
                <Image
                  src={"https:" + data.fields.image.fields.file.url}
                  alt="weInvestSmallBanner"
                  priority
                  height={450}
                  width={450}
                />

                <h5 className={styles.workWrapListWrapH5}>
                  {data.fields.heading}
                </h5>
                <h4 className={styles.workWrapListWrapH4}>
                  {data.fields.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
