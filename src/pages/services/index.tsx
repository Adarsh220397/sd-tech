import Image from "next/image";
import styles from "../../app/page.module.css";
import DigitalExpStrategy from "./digital_exp_strategy";
import Footer from "./footer";
import OurClients from "./our_clients";
import Services from "./services";
import UserExperienceAndDesign from "./user_exp_design";
import WebMobileApplicationDev from "./web_mob_app_dev";

export default function MainIndex() {
  return (
    <>
   <div>

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
