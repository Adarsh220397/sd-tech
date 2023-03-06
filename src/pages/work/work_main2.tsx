import Image from "next/image";
import styles from "../../app/page.module.css";
import ContentImagesOne from "./content";
import Header from "../components/header";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import { Suspense, useEffect, useState } from "react";

export default function Work() {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}

      <div className={styles.homeHeaderServices}>
        <div className={styles.bgImageForServices}>
          <div className={styles.homeHeaderContent}>
            <div className={styles.container}>
              <div className={styles.serviceHeaderContentInner}>
                <h1>Work</h1>
                <p>
                  We deliver beautiful products and great experiences that users
                  love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </Suspense> */}
    </>
  );
}
