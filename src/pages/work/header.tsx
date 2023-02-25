import Image from "next/image";
import styles from "../../app/page.module.css";
import logoWhite from "../../../assets/images/logoWhite.svg";
import hamBurger from "../../../assets/images/hamburger.svg";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "300",
            WebkitAlignContent: "space-between",
          }}
        >
          <div className={styles.headerSectionRowColMd6}>
            <Image src={logoWhite} alt="StudioDiseno" priority />
          </div>
          <div
            style={{
              textAlign: "right",
              padding: 20,
            }}
          >
            <Image src={hamBurger} alt="StudioDiseno" priority />
          </div>
        </div>
      </div>
    </>
  );
}
