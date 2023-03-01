
import ServiceMainIndex from "@/pages/services";
import WhoWeAre from "../pages/whoWeAre/who_we_are";
import WorkMainIndex from "@/pages/work";
import WhoWeAreContent from "@/pages/whoWeAre/content";
import VersionApp from "../pages/whoWeAre/version_app";
import WhoWeAreMainIndex from "@/pages/whoWeAre";
import StartUp from "../pages/startups/startups";
import ProductIdeation from "../pages/startups/product_ideation";
import UIUXDesign from "@/pages/startups/ui_ux_design";
import MVP from "@/pages/startups/mvp";
import MvpIndex from "../pages/startups";
import Careers from "../pages/careers/careers";
import CurrentOpennings from "../pages/careers/current_opennings";
import CareersIndex from "../pages/careers";
import Main from "../pages/home/home";
import WhatWeDo from "../pages/home/what_we_do";
import Header from "../pages/components/header";
import HomeIndex from "../pages/home";
import OurClients from "../pages/components/our_clients";
import Footer from "../pages/components/footer";
export default function Home() {
  return (
    <main>
     {/* <ServiceMainIndex/>
     <WorkMainIndex/> */}
   
     {/* <WhoWeAreMainIndex/> */}
 {/* <MvpIndex/> */}
{/* <CareersIndex/> */}
<Header darkLogo={false} pageName={'Home'}/>
<Main/>
<WhatWeDo/>
<VersionApp/>
      <OurClients/>
      <Footer/>
    </main>
  );
}
