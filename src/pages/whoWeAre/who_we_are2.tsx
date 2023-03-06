import { Router } from "next/router";
import { useState, useEffect, Suspense } from "react";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import OurClients from "../components/our_clients";
import WhoWeAreContent from "./content";
import VersionApp from "./version_app";
import Image from "next/image";
import loader from "../../../assets/images/loader.gif";
export default function WhoWeAre() {
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
              <div className={styles.whoWeAreBannerContent}>
                <div className={styles.whoWeAreBannerTitle}>
                  <h1 className={styles.whoWeAreBannerTitleH1}>
                    {"Who We Are"}
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
