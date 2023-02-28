import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";
import VersionApp from "../whoWeAre/version_app";

import Header from "../components/header";
import Careers from "./careers";
import CurrentOpennings from "./current_opennings";


export default function CareersIndex() {
  return (
    <>
   <div>
<Header darkLogo={true}/>
<Careers />
 <CurrentOpennings/>
      <OurClients/>
      <Footer/>

   </div>
    </>
  );
}
