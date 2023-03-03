"use client";
import Image from "next/image";
import ServiceMainIndex from "@/pages/services/services";
import WhoWeAre from "../pages/whoWeAre/who_we_are";
import WorkMainIndex from "@/pages/work";
import WhoWeAreContent from "@/pages/whoWeAre/content";
import VersionApp from "../pages/whoWeAre/version_app";
import WhoWeAreMainIndex from "@/pages/whoWeAre";
import StartUp from "../pages/startups/startups2";
import ProductIdeation from "../pages/startups/product_ideation";
import UIUXDesign from "@/pages/startups/ui_ux_design";
import MVP from "@/pages/startups/mvp";
import MvpIndex from "../pages/startups/startups";
import Careers from "../pages/careers/careers";
import CurrentOpennings from "../pages/careers/current_opennings";
import CareersIndex from "../pages/careers";
import Main from "../pages/home/home";
import WhatWeDo from "../pages/home/what_we_do";
import Header from "../pages/components/header";
import HomeIndex from "../pages/home";
import OurClients from "../pages/components/our_clients";
import Footer from "../pages/components/footer";
import Router from "next/router";
import { useState, useEffect, Suspense } from "react";
import styles from "./page.module.css";
import loader from "../../assets/images/loader.gif";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [listData, setData] = useState([]);

  useEffect(()=>{
    // fetchData();
    setLoading(true);
    setLoading(false);
    console.log('------------')

  },[])

  const fetchData = () => {
    setLoading(true)
    fetch('https://api.github.com/users').then(response=> response.json()).then(data=>{
      setData(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      
    })
  }
  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => setLoading(true));
  //   Router.events.on("routeChangeComplete", () => setLoading(false));
  //   Router.events.on("routeChangeError", () => setLoading(false));
  //   console.log("---------------");
  //   return () => {
  //     Router.events.off("routeChangeStart", () => setLoading(true));
  //     Router.events.off("routeChangeComplete", () => setLoading(false));
  //     Router.events.off("routeChangeError", () => setLoading(false));
  //   };
  // }, [Router.events]);
  return (
    <>
      {/* {" "}
      {loading ? (
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
      ) : ( */}
        {/* <Suspense fallback={<Loading />}> */}
          {loading?
          <Loading />
          :
          <>
          
            {/* <p>
             Length: {listData.length}
            </p>
        {listData.map((data:any, index: number)=>(
          <p key={index}>
            {data?.login?.toString()}
          </p>
        ))} */}
<HomeIndex />
               {/* <Header darkLogo={false} pageName={"Home"} />
          <Main />
          <WhatWeDo />
          <VersionApp />
          <OurClients />
          <Footer /> */}
        </>
        }
   
        {/* </Suspense> */}
      {/* )} */}
    </>
  );
}
