import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../app/page.module.css";

interface IProps {
  title :string;
  description: string;
  backgroundImage: string;
  }


export default function Careers( {title,description,backgroundImage}: IProps) {
  return (
    <>
      <div>
        <div>
          {/* className={styles.homeHeader} */}
 
          <div className={styles.homeHeaderServices}>
            <div className={styles.bgImageForCareers} 
            // style={{
            //   backgroundImage:`url(${backgroundImage})`
            // }}
            >
              <div className={styles.homeHeaderContent}>
                <div className={styles.container}>
                  <div className={styles.serviceHeaderContentInner}>
                    <h1>{title}</h1>
                    <p>
                      {
                       description
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
