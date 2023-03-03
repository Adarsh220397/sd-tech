import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";
import VersionApp from "../whoWeAre/version_app";

import Header from "../components/header";
import MVP from "./mvp";
import ProductIdeation from "./product_ideation";
import StartUp from "./startups2";
import UIUXDesign from "./ui_ux_design";


export default function MvpIndex() {
  return (
    <>
   <div>
<Header darkLogo={true} pageName={'Startups'}/>
<StartUp/>
     <ProductIdeation/>
     <UIUXDesign/>
     <MVP/>
     <VersionApp/>
      <OurClients/>
      <Footer/>

   </div>
    </>
  );
}
