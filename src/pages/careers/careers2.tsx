import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../app/page.module.css";

export default function Careers() {
  return (
    <>
      <div>
        <div>
          {/* className={styles.homeHeader} */}

          <div className={styles.homeHeaderServices}>
            <div className={styles.bgImageForCareers}>
              <div className={styles.homeHeaderContent}>
                <div className={styles.container}>
                  <div className={styles.serviceHeaderContentInner}>
                    <h1>Come work with us!</h1>
                    <p>
                      {
                        "We're looking for talented individuals that want to do great work with amazing people."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
