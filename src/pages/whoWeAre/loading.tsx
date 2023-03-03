import styles from "./page.module.css";
import Image from "next/image";
import loader from "../../assets/images/loader.gif";
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return       <p>
        Loading...
    </p>;
    //  <div className={styles.wrapper}>
    // <Image
    //                   src={loader}
    //                   alt="loader"
    //                   style={{
    //                     verticalAlign: "middle",
    //                   }}
                    
    //                   priority
    //                 />
           
    //     </div>



    //  <>
    // <div className={styles.wrapper}></div>
    // <h1>
    //     {'Loading'}
    // </h1>
    // </> 
  }