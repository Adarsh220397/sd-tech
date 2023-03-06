import Image from "next/image";
import styles from "../../app/page.module.css";
import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import UserExperienceAndDesign from "../services/user_exp_design";

import Header from "../components/header";
import WhoWeAreContent from "./content";
import VersionApp from "./version_app";
import WhoWeAre from "./who_we_are2";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

export default function WhoWeAreMainIndex() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          <Header darkLogo={true} pageName={"WhoWeAre"} />
          <WhoWeAre />
          <WhoWeAreContent />
          <VersionApp />

          <OurClients />
          <Footer />
        </div>
      )}
    </>
  );
}
