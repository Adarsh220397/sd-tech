import styles from "./page.module.css";
import Image from "next/image";
import loader from "../../assets/images/loader.gif";
export default function Loading() {
  return (

    <div className={styles.wrapper}>
    <Image
      src={loader}
      alt="loader"
      width={60}
      height={60}

      style={{
        verticalAlign: "middle",
      }}
  
      priority
    />
  </div>
    // <div
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     display: "flex",
    //     backgroundColor: 'white'
    //   }}
    // >
    //   <h1>Loading...</h1>
    // </div>
  );
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.wrapper}>
      <Image
        src={loader}
        alt="loader"
        style={{
          verticalAlign: "middle",
        }}
        priority
      />
    </div>
  );

  // <p>
  //     Loading...
  // </p>;

  //  <>
  // <div className={styles.wrapper}></div>
  // <h1>
  //     {'Loading'}
  // </h1>
  // </>
}
