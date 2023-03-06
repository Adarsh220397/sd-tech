import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";
import VersionApp from "../whoWeAre/version_app";

import Header from "../components/header";
import Careers from "./careers2";
import CurrentOpennings from "./current_opennings";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

export default function CareersIndex() {
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
        <>
          <div>
            <Header darkLogo={true} pageName={"Career"} />
            <Careers />
            <CurrentOpennings />
            <OurClients />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
