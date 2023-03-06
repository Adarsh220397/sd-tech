import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import Header from "../components/header";
import ContentImagesOne from "./content";
import Work from "./work_main2";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

export default function WorkMainIndex() {
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
        <div>
          <Header darkLogo={false} pageName={"Work"} />
          <Work />
          <ContentImagesOne />
          <OurClients />
          <Footer />
        </div>
      )}
    </>
  );
}
