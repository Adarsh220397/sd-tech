"use client";

import Image from "next/image";
import styles from "../../app/page.module.css";
import logoWhite from "../../../assets/images/logoWhite.svg";
import logo from "../../../assets/images/logo.svg";
import hamBurger from "../../../assets/images/hamburger.svg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import brooke from "../../../assets/images/closeIcon.svg";

interface IProps {
  darkLogo: boolean;
  pageName:string;
}
export default function Header({ darkLogo,pageName }: IProps) {
  const [showMe, setShowMe] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
console.log('------',scrollY)
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggle() {
    setShowMe(!showMe);

    console.log(showMe);
  }

  // const [c, setShowMe] = useState(true);
  // function toggle(){
  //   setShowMe(!showMe);
  // }

  return (
    <>
      <div className={styles.header}>
        <div className={scrollY > 30 ? styles.headersBG : styles.headerNormal}>
          <div className={styles.headerSectionRowColMd6}>
            <Link href={"https://studiodiseno.com"}>
              <Image
                width={scrollY > 30 ? 40 : 50}
                height={scrollY > 30 ? 40 : 50}
                src={darkLogo || scrollY > 30 ? logo : logoWhite}
                alt="StudioDiseno"
                priority
              />
            </Link>
          </div>
          <div
            style={{
              textAlign: "right",
              padding: 20,
            }}
          >
            <div onClick={toggle}>
              <Image src={hamBurger} alt="StudioDiseno" priority />
            </div>
            <div
              style={{
                display: showMe ? "block" : "none",
              }}
            >
              <div
                id="myNav"
                className={styles.overlay}
                // style={{
                //   display: !showMe?"block":"none"

                // }}
              >
                {/* <a href="javascript:void(0)" className={styles.closebtn} > */}
                <div className={styles.closebtn}>
                  <Link onClick={toggle} href={""}>
                    <Image
                      src={brooke}
                      alt="StudioDiseno"
                      priority
                      className={styles.closebtn}
                    />
                  </Link>
                </div>
                {/* <img class="lazy" data-src="https://studiodiseno.com/images/closeIcon.svg" alt="close"> */}
                {/* </a> */}
                <div className={styles.overlayContent}>
                  <Link className={ pageName ==='Home'?styles.overlayActive: styles.overlayA} href={"/"}>
                    Home
                  </Link>
                  <Link className={pageName ==='Services'?styles.overlayActive:styles.overlayA} href={"/services/services"}>
                    Services
                  </Link>
                  <Link className={pageName ==='Work'?styles.overlayActive:styles.overlayA} href={"/work/work_main"}>
                    Work
                  </Link>
                  <Link
                    className={pageName ==='WhoWeAre'?styles.overlayActive:styles.overlayA}
                    href={"/whoWeAre/who_we_are"}
                  >
                    Who We Are
                  </Link>
                  <Link className={pageName ==='Startups'?styles.overlayActive:styles.overlayA} href={"/startups/startups"}>
                    For Startups
                  </Link>
                  <Link className={pageName ==='Career'?styles.overlayActive:styles.overlayA} href={"/careers/careers"}>
                    Career
                  </Link>
                  <Link
                    className={pageName ==='Contact'?styles.overlayActive:styles.overlayA}
                    href={"/contactUs/contact_us"}
                  >
                    Contact
                  </Link>
                  <div>
                    <div className={styles.overlayAddressContent}>
                      <div className={styles.overlayAddressContentOne}>
                        <div className={styles.overlayAddressContentOneContent}>
                          <h6>USA</h6>

                          <p>186 Princeton Hightstown Rd, Bldg 3,</p>
                          <p> Suite 10, West Windsor, NJ 08550</p>
                        </div>
                        <div style={{ height: "6px" }}></div>
                        <div className={styles.overlayAddressContentOneContent}>
                          <h6>India</h6>

                          <p>No.108, Theyagaraya Road, T Nagar,</p>
                          <p> Chennai - 17, India.</p>
                        </div>
                      </div>
                      <div
                        style={{
                          height: "10px",
                        }}
                      ></div>
                      <div>
                        <Link href="mailto:hello@studiodiseno.com">
                     <p> {'E-mail: hello@studiodiseno.com'}</p>     
                        </Link>
                        <Link href="tel:+91 44 42632026">
                        <p> {'Contact: +91 44 42632026'}</p>  
                         
                        </Link>
                      </div>
                    </div>
                    <div className={styles.copyRights}>
                      <p>??2019 StudioDise??o. All Rights Reserved.</p>
                    </div>
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
