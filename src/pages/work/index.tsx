import Footer from "../components/footer";
import OurClients from "../components/our_clients";
import Header from "../components/header";
import ContentImagesOne from "./content";
import Work from "./work_main";

export default function WorkMainIndex() {
  return (
    <>
   <div>
   <Header darkLogo={false}/>
      <Work/>
      <ContentImagesOne/>
      <OurClients/>
      <Footer/>
   </div>
    </>
  );
}
