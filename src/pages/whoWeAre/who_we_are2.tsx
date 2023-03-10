import { Router } from "next/router";
import { useState, useEffect, Suspense } from "react";
import styles from "../../app/page.module.css";


interface IProps {
  title :string;
  backgroundImage: string;
  }

export default function WhoWeAre( {title,backgroundImage}:IProps) {

  return (
    <>
      
      <div
        style={{
          backgroundColor: "white",
        }}
      >
        <div>
          <div className={styles.whoWeAreBanner}>
            <div className={styles.whoWeAreContainer}>
              <div className={styles.whoWeAreBannerContent} style={{
                backgroundImage:`url(${backgroundImage})`
              }}>
                <div className={styles.whoWeAreBannerTitle}>
                  <h1 className={styles.whoWeAreBannerTitleH1}>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}
