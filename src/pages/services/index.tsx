import Image from "next/image";
import styles from "../../app/page.module.css";
import DigitalExpStrategy from "./digital_exp_strategy";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import Services from "./services";
import UserExperienceAndDesign from "./user_exp_design";
import WebMobileApplicationDev from "./web_mob_app_dev";
import Header from "../work/header";

export default function ServiceMainIndex() {
  return (
    <>
   <div>
<Header/>
   <Services/>
      <DigitalExpStrategy/>
      <WebMobileApplicationDev/>
      <UserExperienceAndDesign/>
      <OurClients/>
      <Footer/>

   </div>
    </>
  );
}
