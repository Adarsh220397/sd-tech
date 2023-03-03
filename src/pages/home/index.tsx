"use client";

import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";

import Header from "../components/header";

import WhatWeDo from "./what_we_do";
import Main from "./home";

export default function HomeIndex() {
  return (
    <>
   <div>
   <Header darkLogo={false} pageName={"Home"} /><Main />
<WhatWeDo/>
      <OurClients/>
      <Footer/>

   </div>
    </>
  );
}
