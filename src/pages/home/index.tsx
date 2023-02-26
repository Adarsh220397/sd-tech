"use client";

import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";

import Header from "../components/header";
import { Main } from "next/document";
import WhatWeDo from "./what_we_do";

export default function HomeIndex() {
  return (
    <>
   <div>
{/* <Header/> */}
<Main/>
<WhatWeDo/>
      <OurClients/>
      <Footer/>

   </div>
    </>
  );
}
