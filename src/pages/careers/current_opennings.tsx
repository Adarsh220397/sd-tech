
import styles from "../../app/page.module.css";


export default function CurrentOpennings() {
  return (
    <>
 
      <div >
        <div  className={styles.currentOpenning}> 
        {/* className={styles.homeHeader} */}

       
        <div className={styles.currentOpenningContainer}>


        <div className={styles.currentOpenningWrap}>
        <h2>Current Openings</h2>
        <div className={styles.currentOpenninglistWrap}>
        <a href="./uxdesigner.html"className={styles.currentOpenningList}>
                        <div>
                            <h5>UX Designer</h5>
                            <span className={styles.line}></span>
                            <div className={styles.apply}>
                                <h4>apply</h4>
                            </div>
                            <div className={styles.width}></div>
                        </div>
                        </a>
                        <a href="./reactjsdeveloper.html" className={styles.currentOpenningList}>
                        <div>
                                <h5>Reactjs developer</h5>
                                <span className={styles.line}></span>
                                <div className={styles.apply}>
                                    <h4>apply</h4>
                                </div>
                                <span  className={styles.containerWidth}></span>
                            </div>
                            </a>
                            <a href="./businessanalyst.html" className={styles.currentOpenningList}>
                            <div>
                                    <h5>Business Analyst</h5>
                                    <span className={styles.line}></span>
                                    <div className={styles.apply}>
                                        <h4>apply</h4>
                                    </div>
                                    <span className={styles.width}></span>
                                </div>
                                </a>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
