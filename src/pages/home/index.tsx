"use client";

import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";

import Header from "../components/header";

import WhatWeDo from "./what_we_do";
import Main from "./home";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import OurWork from "./our_work";

export default function HomeIndex() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetchData();
    setLoading(true);
    setLoading(false);
    console.log("------------");
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header darkLogo={false} pageName={"Home"} />
          <Main />
      
          <WhatWeDo />
          <OurClients />
          <Footer />
        </div>
      )}
    </>
  );
}
