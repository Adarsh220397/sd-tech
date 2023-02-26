import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";

import Header from "../components/header";
import WhoWeAreContent from "./content";
import VersionApp from "./version_app";
import WhoWeAre from "./who_we_are";

export default function WhoWeAreMainIndex() {
  return (
    <>
   <div>
<Header/>
<WhoWeAre/>
      <WhoWeAreContent/>
      <VersionApp/>
      
      <OurClients/>
      <Footer/>

   </div>
    </>
  );
}
